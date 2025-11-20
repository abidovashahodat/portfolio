/**
 * Telegram Integration Module
 * Sends contact form messages to Telegram channel
 *
 * Configuration Methods:
 * 1. Add to HTML: <script> window.TELEGRAM_CONFIG = { botToken: '...', chatId: '...' }; </script>
 * 2. Add to .env file in project root (parse manually via fetch)
 * 3. Use config.js file with credentials
 */

class TelegramService {
    constructor() {
        this.botToken = null;
        this.chatId = null;
        this.apiUrl = 'https://api.telegram.org/bot';

        // Try to load credentials from window config (recommended for vanilla JS)
        if (window.TELEGRAM_CONFIG && window.TELEGRAM_CONFIG.botToken && window.TELEGRAM_CONFIG.chatId) {
            this.botToken = window.TELEGRAM_CONFIG.botToken;
            this.chatId = window.TELEGRAM_CONFIG.chatId;
            console.log('✓ Telegram config loaded from js/config.js');
        } else {
            // Fallback: try to load from .env file via fetch
            this.loadFromEnvFile();
        }
    }

    /**
     * Load credentials from .env file (async)
     */
    async loadFromEnvFile() {
        try {
            const response = await fetch('./.env');
            if (!response.ok) {
                console.warn('Could not load .env file (HTTP ' + response.status + ')');
                return;
            }

            const text = await response.text();
            const lines = text.split('\n');

            lines.forEach(line => {
                // Skip comments and empty lines
                if (!line.trim() || line.trim().startsWith('#')) return;

                if (line.includes('TELEGRAM_BOT_TOKEN')) {
                    const value = line.split('=')[1]?.trim();
                    if (value && !value.startsWith('#')) {
                        this.botToken = value;
                    }
                }
                if (line.includes('TELEGRAM_CHAT_ID')) {
                    const value = line.split('=')[1]?.trim();
                    if (value && !value.startsWith('#')) {
                        this.chatId = value;
                    }
                }
            });

            if (this.botToken && this.chatId) {
                console.log('✓ Telegram config loaded from .env file');
            }
        } catch (error) {
            console.warn('Could not load .env file. Use window.TELEGRAM_CONFIG instead:', error);
        }
    }

    /**
     * Validate configuration
     */
    isConfigured() {
        return this.botToken && this.chatId;
    }

    /**
     * Get configuration status
     */
    getStatus() {
        return {
            isConfigured: this.isConfigured(),
            hasBotToken: !!this.botToken,
            hasChatId: !!this.chatId
        };
    }

    /**
     * Format message for Telegram
     */
    formatMessage(data) {
        const timestamp = new Date().toLocaleString();
        const message = `
<b>📬 New Contact Form Message</b>

<b>👤 Name:</b> ${this.escapeHtml(data.name)}
<b>📧 Email:</b> ${this.escapeHtml(data.email)}
<b>📱 Phone:</b> ${this.escapeHtml(data.phone)}
<b>📝 Subject:</b> ${this.escapeHtml(data.subject)}

<b>💬 Message:</b>
${this.escapeHtml(data.message)}

<b>⏰ Received:</b> ${timestamp}
        `.trim();

        return message;
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, char => map[char]);
    }

    /**
     * Send message to Telegram
     */
    async sendMessage(data) {
        // Validate configuration
        if (!this.isConfigured()) {
            throw new Error('Telegram service is not configured. Please edit js/config.js and set botToken and chatId, or set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env file');
        }

        // Validate data
        if (!data.name || !data.email || !data.message) {
            throw new Error('Missing required fields: name, email, and message are required');
        }

        // Format the message
        const message = this.formatMessage(data);

        // Prepare the request
        const url = `${this.apiUrl}${this.botToken}/sendMessage`;
        const payload = {
            chat_id: this.chatId,
            text: message,
            parse_mode: 'HTML'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                throw new Error(result.description || 'Failed to send message to Telegram');
            }

            return {
                success: true,
                messageId: result.result.message_id,
                timestamp: new Date()
            };
        } catch (error) {
            console.error('Telegram API Error:', error);
            throw new Error(`Failed to send message: ${error.message}`);
        }
    }
}

// Create singleton instance
const telegramService = new TelegramService();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = telegramService;
}

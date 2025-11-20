/**
 * Telegram Configuration for Vanilla JS
 *
 * SETUP METHOD 1 (Recommended): Edit this file directly
 * ======================================================
 * 1. Get bot token from @BotFather on Telegram
 * 2. Get chat ID from @userinfobot on Telegram
 * 3. Fill in the values below
 * 4. That's it! No build process needed.
 *
 * SETUP METHOD 2: Use .env file
 * =============================
 * The telegram.js will try to load from .env if config below is empty.
 * This is slower (requires fetch) and may not work with some servers.
 *
 * SETUP METHOD 3: Inline HTML
 * ============================
 * Add this to your HTML before telegram.js:
 * <script>
 *   window.TELEGRAM_CONFIG = {
 *     botToken: '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890',
 *     chatId: '1234567890'
 *   };
 * </script>
 */

// ============================================
// RECOMMENDED: Edit credentials below
// ============================================

window.TELEGRAM_CONFIG = {
    // Your Telegram Bot Token
    // Get from @BotFather on Telegram
    // Example: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890
    botToken: '8501351157:AAG5BYelTUk6xnBCwwemM01HTxfYMapbcCw',

    // Your Telegram Chat/Channel ID
    // Get from @userinfobot on Telegram
    // For channels: usually starts with -100
    // Example: 1234567890 or -1001234567890
    chatId: '-1003415126953'
};

// ============================================
// Alternative: Load from .env file
// ============================================
// If the values above are empty, telegram.js will try to load from .env
// But this method is NOT recommended for static sites as .env won't be accessible

/**
 * Quick Setup Steps:
 *
 * 1. Open @BotFather on Telegram
 * 2. Type: /newbot
 * 3. Follow instructions to create bot
 * 4. Copy the bot token (long string with colon)
 * 5. Paste it above in botToken field
 *
 * 6. Open @userinfobot on Telegram
 * 7. Send: /start
 * 8. It shows your ID
 * 9. Copy the ID number
 * 10. Paste it above in chatId field
 *
 * Done! Your contact form will now send to Telegram.
 */

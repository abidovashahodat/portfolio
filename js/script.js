function setYear() {
	const year = document.getElementById("year");
	if (year) {
		year.innerHTML = new Date().getFullYear();
	}
}
setYear();


function toggleMenu(menuId, openBtnId, closeBtnId) {
	const menu = document.getElementById(menuId);
	const openBtn = document.getElementById(openBtnId);
	const closeBtn = document.getElementById(closeBtnId);

	openBtn.addEventListener("click", () => {
		menu.style.transform = "translateX(0)";
	});

	closeBtn.addEventListener("click", () => {
		menu.style.transform = "translateX(-100%)";
	});
}


   toggleMenu("menu-features", "feature", "close-btn-sidebar");


   toggleMenu("mobile-menu", "burger-btn", "close-btn");




const scrollUpBtn = document.getElementById("scrollUpBtn");
if (scrollUpBtn) {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
			scrollUpBtn.classList.add("show");
		} else {
			scrollUpBtn.classList.remove("show");
		}
	});

	scrollUpBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}


const loader = document.getElementById("weather-loader");
const weatherEl = document.getElementById("weather");

if (loader && weatherEl) {
	loader.style.display = "block";

	const apiKey = "db18181f25347943f635ac1773709b41";
	const city = "Dushanbe"; 

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
	)
		.then((res) => res.json())
		.then((data) => {
			const temp = Math.round(data.main.temp);
			const main = data.weather[0].main;
			let emoji = "☀️";

			if (main === "Clouds") emoji = "☁️";
			else if (main === "Rain") emoji = "🌧️";
			else if (main === "Snow") emoji = "❄️";
			else if (main === "Thunderstorm") emoji = "⛈️";
			else if (main === "Drizzle") emoji = "🌦️";
			else if (main === "Clear") emoji = "☀️";
			else emoji = "🌤️";

			weatherEl.textContent = `${emoji} ${temp}°C`;
		})
		.catch(() => {
			weatherEl.textContent = "⚠️ Ошибка загрузки погоды";
		})
		.finally(() => {
			loader.style.display = "none";
		});
}


function calc() {
	
	const a = +prompt("Введите  1 число");
	const b = +prompt("Введите  2 число");
	const c = prompt("Введите операцию");

	function show(text, hasPrefix = false) {
		let result;
		if (hasPrefix) {
			result = "Ответ = " + text;
		} else {
			result = text;
		}
		console.log(result);
		alert(result);
	}

	if (isNaN(a) || isNaN(b)) {
		show("это не число");
	} else if (c !== "+" && c !== "-" && c !== "*" && c !== "/") {
		show("не поддерживаемая  операция ");
	}
	switch (c) {
		case "+":
			show(a + b, true);
			break;
		case "-":
			show(a - b, true);
			break;
		case "*":
			show(a * b, true);
			break;
		case "/":
			show(a / b, true);
			break;
		default:
			show("Используйте допустимые символы");
			break;
	}
}

function scrollToBtn() {
    const target = document.getElementById("btn");
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

const buttons = document.querySelectorAll(".btn-contact, .btn");
buttons.forEach(btn => {
    btn.addEventListener("click", scrollToBtn);
});




document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.night-theme-btn');

	if (themeBtn) {

		const applyTheme = (theme) => {
			if (theme === 'night') {
				document.body.classList.add('night-theme');
			} else {
				document.body.classList.remove('night-theme');
			}
		};

	
		const savedTheme = localStorage.getItem('theme') || 'light';
		applyTheme(savedTheme);

	
		themeBtn.addEventListener('click', () => {
			if (document.body.classList.contains('night-theme')) {
				
				document.body.classList.remove('night-theme');
				localStorage.setItem('theme', 'light');
			} else {
				
				document.body.classList.add('night-theme');
				localStorage.setItem('theme', 'night');
			}
		});
	}
});



document.getElementById('language-select').addEventListener('change', function () {
    window.location.href = this.value;
});





function setYear() {
	const year = document.getElementById("year");
	year.innerHTML = new Date().getFullYear();
}

setYear();

// Calculator
const featureSwitcher = false;

if (featureSwitcher) {
}

const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

burgerBtn.addEventListener("click", () => {
	mobileMenu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
	mobileMenu.style.transform = "translateX(-100%)";
});

document.addEventListener("click", function () {});

const button = document.querySelector(".btn-contact");

button.addEventListener("click", () => {
	const target = document.querySelector("#btn");
	target.scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("click", function () {});



const sidebarBtn = document.getElementById("feature");
const closeBtnSidebar = document.getElementById("close-btn-sidebar");
const Menu = document.getElementById("menu-features");

sidebarBtn.addEventListener("click", () => {
	Menu.style.transform = "translateX(0)";
});

closeBtnSidebar.addEventListener("click", () => {
	Menu.style.transform = "translateX(-100%)";
});

document.addEventListener("click", function () {});



const scrollUpBtn = document.getElementById("scrollUpBtn");

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

const loader = document.getElementById("weather-loader");
loader.style.display = "block";

const apiKey = "db18181f25347943f635ac1773709b41";
const city = "Dushanbe";
const weatherEl = document.getElementById("weather");

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



function calc() {
	// TODO
	/* Нужно написать код для калькулятора, который будет проверять 
    значения первого числа на число, значение второго числа на число 
    и значение третьего знака только на допустимые знаки: +, -, *, /,  
    и выводить сообщения об ошибках, если условия нарушаются
    При вводимых знаках нужно делать соотвующую операцию с числами
    Например: пользователь ввел первое число 10, второе число 20 и 
    знак умножения то результат должен быть 200
    */
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

const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

burgerBtn.addEventListener("click", function () {
	mobileMenu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", function () {
	mobileMenu.style.transform = "translateX(-100%)";
});

document.addEventListener("click", function () {});



document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.night-theme-btn');

	
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
		let currentTheme = 'light';
		if (document.body.classList.contains('night-theme')) {
		
			document.body.classList.remove('night-theme');
			localStorage.setItem('theme', 'light');
		} else {
			
			document.body.classList.add('night-theme');
			localStorage.setItem('theme', 'night');
			currentTheme = 'night';
		}
	});
});

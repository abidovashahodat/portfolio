function setYear() {
	const year = document.getElementById("year");
	year.innerHTML = new Date().getFullYear();
}

setYear();

// Calculator
const featureSwitcher = false;

if (featureSwitcher) {
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

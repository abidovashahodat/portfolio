const featureSwitcher = true;

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
	const a = prompt("Введите число 1");
	const b = prompt("Введите число 2");
	const char = prompt("Введите операцию");


if( isNaN(a) || isNaN(b) || a === "" || b === ""){
    alert("Ошибка! Введите число");
}
 else if (!["+", "-", "*", "/"].includes(char)) {
		alert("Ошибка: допустимы только знаки +, -, *, /");
	} else {
		const num1 = parseFloat(a);
		const num2 = parseFloat(b);
		let result;

        switch (char) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				if (num2 === 0) {
					alert("Ошибка: деление на ноль!");
					return;
				}
				result = num1 / num2;
				break;
		}

		alert(`Результат: ${result}`);
	}

}

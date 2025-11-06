const arr = [1, 5, 2, 10];
const arr2 = [6, 9, 1, 4, 55];

function arraySum(massiv) {
	let result = 0;
	for (let i of massiv) {
		result = result + i;
	}
	return result;
}

const result = arraySum(arr);

console.log(result);

console.log("Результат равен: ", arraySum([4, 1, 1]));

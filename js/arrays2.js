const arr = [3, 2, 10, 6, 11, 12, 100, 5, 77];

for (let el of arr) {
	console.log(el * 2);
}

arr.forEach((el) => {
	console.log(el * 2);
});

// function findEl(arr, value) {
// 	for (let item of arr) {
// 		if (item === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// const first = findEl(arr, 100); // false
// console.log(first);

// const second = findEl([5, 3, 2, 10], 100); // true;

// console.log(second);

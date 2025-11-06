const arr = [1, 5, 10, 9, 6, 10, 11, 99];

for (let i = 0; i < arr.length - 1; i++) {
	if ((i + 1) % 2 === 1) {
		console.log(arr[i + 1]);
	}
}

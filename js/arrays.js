const immutableArr = [4, 1, 10, 5, 8];

function isContain(arr, value) {
	let n;

	for (let i of arr) {
		if (i === value) {
			n = true;
			break;
		}
	}
	return !!n;
}

console.log(isContain(immutableArr, 8));

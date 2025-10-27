const immutableArr = [10, 11, 12];

const result = immutableArr.map((n) => {
	return n * 2;
});
const customResult = map2(immutableArr, (item) => item * 10);

function map2(arr, func) {
	const a = [];

	for (let i of arr) {
		const res = func(i);
		a.push(res);
	}
	return a;
}

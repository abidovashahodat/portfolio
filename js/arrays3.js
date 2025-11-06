const massiv = [4, 2, 10, 5];
const massiv2 = [6, 1, 2, 100];
const massiv3 = [5, 1, 2, 10];

function countEven(arr) {
	let n = 0;
	for (let i of arr) {
		if (i % 5 === 0) {
			n++;
		}
	}
	console.log("arr: ", n);
	return n;
}

const Shahodat = countEven(massiv);
console.log("Shahodat: ", Shahodat);
countEven(massiv2);
countEven(massiv3);

const immutableArr = [4, 1, 10, 5, 8];

const users = [
	{
		id: 1,
		name: "Shahodat",
		role: "user",
	},
	{
		id: 2,
		name: "Umeda",
		role: "admin",
	},
];

for (let user of users) {
	console.log("user: ", user.name);
}

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

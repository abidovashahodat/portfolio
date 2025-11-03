// fetch("https://google.com").then(() => console.log(2222));

const promise = new Promise((res, rej) => {
	res();
});

promise.then(() => console.log(2222));
console.log(1111);
console.log(3333);

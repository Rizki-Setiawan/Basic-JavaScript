// Promise.all()
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

const promise4 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise4, promise5, promise6])
	.then((values) => console.log(values))
	.catch((error) => console.log(error.message)); // ups

// Promise.race()
const promise7 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise8 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise7, promise8, promise9])
	.then((value) => console.log(value)); // 1 setelah 1 detik

const promise10 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise11 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise12 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise10, promise11, promise12])
	.then((value) => console.log(value))
	.catch((error) => console.log(error.message)); // Ups

// Promise.allSettled()
const promise13 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise14 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise15 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise13, promise14, promise15])
	.then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

// Promise.any()
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
	.then((value) => console.log(value)) // 1
	.catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
	.then((value) => console.log(value))
	.catch((error) => console.log(error.message)); // All Promises were rejected
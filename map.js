// const capital = new Map([
// 	["inggris", "london"],
// 	["rusia", "moscow"],
// 	["jepang", "tokyo"],
// 	["a", 10],
// 	["b", 20]
// ]);

// console.log(capital);
// console.log("value of capital map :", capital.size);
// console.log(capital.get("jepang"));
// console.log(capital.set("china", "beijing"));
// console.log(capital.has("rusia"));
// console.log(capital.delete("jepang"));
// capital.forEach((value, key) => {
// 	console.log(key, value);
// });
// console.log(capital.keys());
// console.log(capital.entries());
// console.log(capital);

// let a = capital.get("a");
// let b = capital.get("b");
// console.log(a + b);

// const buah = new Map();
// buah.set(1, "mangga");
// buah.set(2, "semangka");
// console.log(buah);
// buah.set(1, "apel");
// console.log(buah);

// case study
const priceInJPY = 5000;
const currency = new Map([
	["USD", 14000],
	["JPY", 131],
	["SGD", 11000],
	["MYR", 3500]
])

let priceInIDR = priceInJPY * (currency.get("JPY"))
console.log(priceInIDR);


// let myArr = ["blue", 1, 2.3, true, "kise"];

// console.log(myArr[5 - 1]);

// myArr.forEach((item, index) => {
//   console.log("Index -> ", index, "item ->", item);
// });

// // menambahkan data terakhir ke array push()
// myArr.push(false);
// console.log("push() item false", myArr);

// // menghapus data terakhir dari array pop()
// myArr.pop();
// console.log("pop()", myArr);

// // menambahkan data pertama ke array unshift()
// myArr.unshift("pertama");
// console.log("unshift() item pertama", myArr);

// // menghapus data pertama dari array shift()
// myArr.shift();
// console.log("shift()", myArr);

// // menghapus data yang dipilih pada array delete
// delete myArr[4];
// console.log("delete index 4", myArr);

// // menghapus elemen dengan splice()
// myArr.splice(4, 1); // menghapus dari index 4 sebanyak 1 item
// console.log("splice index 4 sebanyak 1 item", myArr);

// // menambahkan elemen dengan splice()
// let numberArr = [1, 4, 5, 6];
// console.log("before splice() add", numberArr);
// numberArr.splice(1, 0, 2, 3); // menghapus dari index 1 sebanyak 0 dan menambahkan item 2 dan 3
// console.log("after splice() add item 2 and 3", numberArr);

// // spread operator
// let newArr = ["red", "green", "blue", "yellow"];
// console.log(...newArr, "<= spread operator");

// let arrA = [1, 2, 3, 4];
// let arrB = [5, 6, 7, 8];
// let arrAB = [...arrA, ...arrB]; // bisa juga untuk object
// console.log(arrAB);

// destructuring array
// const fruits = ["apple", "banana", "grape", "watermelon"];
// const [apple, banana, grape, watermelon] = fruits;
// console.log(apple, banana, grape, watermelon);

// const [, , grape2] = fruits;
// console.log(grape2);

// // destructuring assignment
// let favFruits = "strawberry";
// console.log("favFruits before assignment :", favFruits);
// [, , favFruits] = fruits;
// console.log("favFruits after assignment :", favFruits);

// // swap value
// let a = 100;
// let b = 200;
// [a, b] = [b, a];
// console.log("nilai a :", a, "nilai b :", b); // a=200 b=100

// // default value
// let car = ["honda", "ferrari"];
// const [japan, italia, germany = "volkswagen"] = car;
// console.log(japan, italia, germany);

// // destructuring nested array
// let profile = ["rizki", 12, "tasikmalaya", ["coding", "gaming"]];
// const [nama, kelas, alamat, [hobi1, hobi2]] = profile;
// console.log(nama, kelas, alamat, hobi1, hobi2);

// // destructuring array contains object
// const responeApi = [
//   { id: 1, code: "TSM", name: "Tasikmalaya" },
//   { id: 2, code: "JKT", name: "Jakarta" },
// ];
// const [{ id, code, name }, { id: id2, code: code2, name: name2 }] = responeApi;
// console.log(code, name, code2, name2);

// case study
const evenNumber = [];
for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    evenNumber.push(index);
  }
}
console.log(evenNumber);

const numb = [1, 2, 3];
numb[1] = "satu";
numb[3] = "tiga";
numb[5] = "lima";
console.log(numb);

console.log("fitur search");

const brand = ["yamaha", "suzuki", "vespa"];
brand.forEach((e, i) => {
  console.log(e, "", i);
});

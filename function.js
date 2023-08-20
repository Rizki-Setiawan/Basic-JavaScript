// declaration function
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(10, 12));

// function hello() {
//     console.log("Hello World");
// }
// hello()

// function with return
function greeting(name, language) {
    let greet = "";
    if (language === "french") {
        greet += `bonjour, ${name}`;
    } else if (language === "japan") {
        greet += `ohaiyou, ${name}`
    } else {
        greet += `selamat pagi, ${name}`;
    }
    return greet;
}
const greet = greeting("kise", "japan")
console.log(greet);

// anonymous function
const Hello = function (nama) {
    console.log("Hallo", nama);
}
Hello("kise");

// function parameter
const user = [
    1,
    "rizki",
    "bandung"
];
// destructuring array
function showData([id, nama, alamat]) {
    console.log(id, nama, alamat);
}
showData(user);

// default parameter
function luasLingkaran(r, phi = 3.14) {
    let hasil = "";
    hasil += phi * (Math.pow(r, 2))
    return hasil
}
console.log(luasLingkaran(7));

// rest parameter menggabung parameter menjadi satu array
function sum(...numbers) {
    console.log(numbers);
};
sum(1, 2, 3, 4, 5, [1], "kise", { nama: "rizki" });

// arrow function
const kali = (a, b) => {
    return a * b
}; // with return
console.log(kali(10, 20));

const tambah = (a, b) => a + b; // without return
console.log(tambah(10, 20));

// variable scope
const a = "a"; // global variable akses dimana saja
function parent() {
    const b = "b"; // local variable parent() child()
    function child() {
        const c = "c"; // local variable child()
    }
}


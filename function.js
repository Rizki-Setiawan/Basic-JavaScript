// declaration function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 12));

function hello() {
    console.log("Hello World");
}
hello()

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

// function parameter array
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
    return a * b // with return
};
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

// closure
function closure(a, b) {
    let text = "Hello Closure!!!";
    let tambah = 0;
    tambah = a + b;

    // ini merupakan closure akses parameter parent -> a b
    function kali(numbA, numbB) {
        let kali = 0;
        return kali = numbA * numbB;
    }

    // ini merupakan closure akses variabel parent -> text
    function greet() {
        let greet = `${text}, JavaScript`;
        return greet;
    }

    return [tambah, kali(a, b), greet()]
}

const [hasilTambah, hasilKali, hasilGreet] = closure(50, 10)
console.log(`Tambah : ${hasilTambah}\nKali : ${hasilKali}\nGreet : ${hasilGreet}`);

// closure akses variabel dan parameter
const variabelGlobal = "var global";

function funOuter(param1) {
    const variabel1 = "var1";

    function funInner(param2) {
        const variabel2 = "var2";

        console.log(`variabel global : ${variabelGlobal}`);
        console.log(`variabel1 : ${variabel1}`);
        console.log(`variabel2 : ${variabel2}`);
        console.log(`paremeter1 : ${param1}`);
        console.log(`paremeter2 : ${param2}`);
    }

    funInner("parameter2");
}

funOuter("parameter1")

function hello(word) {
    let say = "Hello";
    function run() {
        console.log(say, word);
    }
    return run
}

const helloShow = hello("World");
helloShow();

const add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

// study case

// return nilai terkecil a atau b
const minimal = (a, b) => {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return a;
    }
}

console.log(minimal(-90, 3))

// return index berdasarkan posisi number pada array 
const findIndex = (array, number) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === number) {
            return index;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 5));

const findIndex2 = (array, number) => {
    let result = "";
    result = array.indexOf(number);
    return result
}

console.log(findIndex2([1, 2, 3, 4, 5], 5));

// mencari nilai min dan max pada array
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);



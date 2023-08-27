// Tipe data, Variabel, Operator
let teks = "Hello Wordl";
teks = "Study JS";
console.log(teks);
console.log(1000 <= 100);

const PromptSync = require("prompt-sync");

// Ternary

const a = 10;
const b = 20;
const c = a + b == 30 ? true : false;
console.log(c);

// ternary multi condition
let rpl = "E";
rpl == "A"
    ? console.log("sangat baik")
    : rpl == "B"
    ? console.log("baik")
    : rpl == "C"
    ? console.log("cukup")
    : rpl == "D"
    ? console.log("kurang")
    : console.log("ngulang");

// If/Else Statement

const isRaining = true;
const keterangan = isRaining ? "Hujan" : "Tidak hujan"; // ternary
console.log(keterangan);

if (isRaining) {
    console.log("Bawa payung");
}

let language = "english";
let greeting = null;

if (language === "japan") {
    greeting = "ohayou";
} else if (language === "english") {
    greeting = "good morning";
} else if (language === "french") {
    greeting = "bonjour";
} else {
    greeting = "undefined";
}
console.log("language :", language, "=>", "greeting :", greeting);

// Switch

let nilai = "C";
switch (nilai) {
    case "A":
        console.log("Lulus");
        break;
    case "B":
        console.log("Lulus Bersyarat");
        break;
    default:
        console.log("Tidak Lulus");
        break;
}

switch (101 > 100) {
    case true:
        console.log("Benar");
        break;
    default:
        console.log("Salah");
        break;
}

console.log("fitur search");
console.log("fitur payment");

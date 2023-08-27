// function segitiga1(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga1(10));

let star = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        star += "* ";
    }
    star += "\n";
}
console.log(star);

let n = 10;
let string = "";

for (let i = 1; i <= n; i++) {
    // untuk mengatur jarak
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    // nge-print bintangnya
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}

console.log(string);

let bintang = "";
for (let i = 10; i >= 1; i--) {
    for (let j = 0; j >= 1 - i; j--) {
        bintang += "* ";
    }
    bintang += "\n";
}
console.log(bintang);

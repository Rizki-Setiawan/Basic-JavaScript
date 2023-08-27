// // Looping
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i, "Genap");
//     } else {
//         console.log(i);
//     }
// }

// let rgbColor = ["red", "green", "blue"];

// for (let i = 0; i < rgbColor.length; i++) {
//     const item = rgbColor[i];
//     console.log(item);
// }

// for (const item of rgbColor) {
//     console.log(item);
// }

// let i = 0;
// while (i < rgbColor.length) {
//     console.log(rgbColor[i]);
//     i++;
// }

// i = 0;
// do {
//     console.log(rgbColor[i]);
//     i++;
// } while (i < rgbColor.length);

// PromptSync
const prompt = require("prompt-sync")({ sigint: true });

// let password = "";
// do {
//     const catchPassword = prompt("Input password : ");
//     password = catchPassword;
//     const info = password.length < 5 ? "Minimal 5 character!" : `Sukses, password anda adalah ${password}`;
//     console.log(info);
// } while (password.length < 5);

// let password = "";
// for (let i = 0; password.length < 5; i++) {
//     console.log(i);
//     const catchPassword = prompt("Input password : ");
//     password = catchPassword;
//     const info = password.length < 5 ? "Minimal 5 character!" : `Sukses, password anda adalah ${password}`;
//     console.log(info);
// }

let password = "";
let i = 1;
let kesempatan = 2;
do {
    if (i <= 3) {
        const catchPassword = prompt("Input password : ");
        password = catchPassword;
        const info =
            password !== "kise"
                ? `Password salah! Kesempatan ${kesempatan}x lagi`
                : `Sukses, password anda adalah ${password}`;
        console.log(info);
    } else {
        console.log("Anda di blokir!!!");
        process.exit(0);
    }
    i++;
    kesempatan--;
} while (password !== "kise");

// let password = "";
// while (password.length < 5) {
//     const catchPassword = prompt("Input password : ");
//     password = catchPassword;
//     const info = password.length < 5 ? "Minimal 5 character!" : `Sukses, password anda adalah ${password}`;
//     console.log(info);
// }

// const date = new Date();
// let year = date.getFullYear();
// const age = Number(prompt("How old are you? "));
// const yearBorn = year - age;
// console.log(`You born in ${yearBorn}`);

//foreach
// const fruits = ["apel", "mangga", "pisang"];

// fruits.forEach(showArray);
// function showArray(item, index) {
//     console.log(index, item);
// }

// fruits.forEach((item, index) => {
//     console.log(index, item);
// });

// const hasilUlangan = [
//     { nama: "Rizki", ipa: 100, ips: 80 },
//     { nama: "Kise", ipa: 75, ips: 95 },
//     { nama: "Seki", ipa: 65, ips: 50 }
// ];

// for (let index = 0; index < hasilUlangan.length; index++) {
//     const hasil = hasilUlangan[index];
//     console.log(
//         hasil.nama,
//         hasil.ipa,
//         hasil.ips
//     );
// }

// hasilUlangan.forEach(({ nama, ipa, ips }) => {
//     console.log(
//         nama,
//         "Ipa :", ipa,
//         "Ips :", ips,
//         "Rata-rata :", (ipa + ips) / 2
//     );
// });

// hasilUlangan.forEach((hasil) => {
//     console.log(
//         hasil.nama,
//         "Ipa :", hasil.ipa,
//         "Ips :", hasil.ips,
//         "Rata-rata :", (hasil.ipa + hasil.ips) / 2
//     );
// });

// const _duaDimensi = [
//     [1, "Rizki"],
//     [3, 4],
//     ["Setiawan", 6]
// ];
// console.log(_duaDimensi[0][1], _duaDimensi[2][0]);

// const arrayAsosiatif = [
//     { nama: "rizki", kelas: "10" },
//     { nama: "kise", kelas: "11" }
// ];
// console.log(arrayAsosiatif[0].nama, arrayAsosiatif[1].kelas);

// const myObject = {
//     number: 1,
//     buah: {
//         buah1: "apel",
//         buah2: "mangga",
//         buah3: {
//             keterangan: "Finish Object"
//         }
//     }
// };
// console.log(myObject.buah.buah3.keterangan);

// const myArray = [
//     1,
//     [
//         2, 3,
//         [
//             4, 5,
//             [
//                 6, "Finish Array"
//             ]
//         ]
//     ]
// ];
// console.log(myArray[1][2][2][1]);

// const myObjArr = {
//     obj:
//         [
//             1, 2, 3,
//             {
//                 objLevel2:
//                     [
//                         4, 5, 6, {
//                             fail: "Not Finish",
//                             keterangan:
//                                 [
//                                     "Finish Object Array"
//                                 ]
//                         }
//                     ]
//             }
//         ]
// };
// console.log(myObjArr.obj[3].objLevel2[3].keterangan[0]);

// const no = ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
// for (let index = no.length - 1; index >= 0; index--) {
//     console.log(no[index]);
// }

const look = (number) => {
    console.log("This is arrow function!!!", number);
};
look(10);

// Object
// let myObj = {}
// myObj = {
//     nama: "rizki",
//     kelas: "x",
//     alamat: "tasikmalaya",
//     umur: 23,
// }
// const waktu = new Date()
// let tahun = waktu.getFullYear()
// let tahunLahir = tahun - myObj.umur
// console.log(
//     "Nama :", myObj.nama,
//     "\nKelas :", myObj.kelas,
//     "\nAlamat :", myObj.alamat,
//     "\nUmur :", myObj["umur"],
//     "\nTahun Lahir :", tahunLahir,
// );

/*
    Untuk akses ke dalam property object :
    myObj.kelas
    myObj["kelas"]
*/

// // mengganti value property
// myObj["kelas"] = "xii"
// console.log("Update data kelas :", myObj["kelas"])

// // menambahkan property baru
// myObj.hobi = "programming"
// console.log(myObj)

// // menghapus property yang di pilih
// delete myObj.umur
// console.log(myObj)

// const obj = {
//     a: {
//         a1: 1,
//         a2: 2,
//         a3: 3,
//         a4: 4,
//         a5: 6,
//     },
//     b: 5,
//     c: 6,
// }

// menghitung banyak data pada object
// console.log(Object.values(obj.a).length);
// console.log(Object.keys(obj.a).length);
// console.log(Object.entries(obj.a).length);

// function showA() {
//     for (const key in obj.a) {
//         console.log(key, obj.a[key]);
//     }
// }
// showA()

// for (const key in obj) {
//     if (key === "a") {
//         for (const keyLvl2 in obj.a) {
//             console.log(key, keyLvl2, obj.a[keyLvl2]);
//         }
//     } else {
//         console.log(key, obj[key]);
//     }
// }

// const nilaiC = obj.a.a1
// const nilaiB = obj.b
// let hasil = nilaiC + nilaiB
// console.log("c + b :", hasil);

// const myData = {
//     nama: "kise",
//     kelas: "x",
// }

// let tingkat = myData.kelas;
// console.log(myData, "isi tingkat ->", tingkat);
// delete myData.kelas;
// console.log(myData, "isi kelas ->", myData.kelas);
// myData.tingkat = tingkat;
// console.log("isi myData.tingkat ->", myData.tingkat, myData);

// let outKeys = Object.keys(myData) // menampilkan key
// console.log(outKeys);

// let outValues = Object.values(myData) // menampilkan value
// console.log(outValues);

// let outEntries = Object.entries(myData) //menampilkan semua property
// console.log(outEntries);

// const respone = {
//     "code": "TNK",
//     "name": "TANJUNG KARANG",
//     "city": "TANJUNG KARANG",
//     "cityname": "KOTA BANDAR LAMPUNG",
// }

// const key = Object.keys(respone)
// key.forEach((key) => {
//     console.log(key, respone[key]);
// });

// for (const key in respone) {
//     console.log("value dari", key, ":", respone[key]);
// }

// var aPisang = {
//   warna: "kuning",
//   bentuk: "panjang",
//   harga: 5000,
//   tentangRasa: function () {
//     // This is the example of create method in object
//     console.log(`sangat enak dan ${aPisang.warna}`);
//   },
// };

// for (const key in aPisang) {
//   key == "tentangRasa" ? aPisang.tentangRasa() : console.log(aPisang[key]);
// }

// spread operator
// let obj1 = new Object();
// let obj2 = new Object();
// obj1.nama = "kise";
// obj1.kelas = 10;
// obj2.alamat = "tasikmalaya";
// obj2.hobi = "coding";
// let obj12 = { ...obj1, ...obj2 };
// console.log(obj1);
// console.log(obj2);
// console.log(obj12);

// let dataSiswa = { nama: "kise", alamat: "bandung" };
// let newData = { hobi: "coding" };
// let joinData = { ...dataSiswa, ...newData };
// console.log(joinData);

// destructuring object
// const destruc = {
//   nama: "rizki",
//   kelas: 12,
//   alamat: "tasikmalaya",
//   hobi: {
//     hobi1: "coding",
//     hobi2: "gaming",
//   },
// };

// const { nama, kelas, alamat } = destruc;
// const { hobi1, hobi2 } = destruc.hobi;
// console.log(nama, kelas, alamat, hobi1, hobi2);

// destructuring nested (deep destructuring)
// const {
//   nama,
//   kelas,
//   alamat,
//   hobi: { hobi1, hobi2 },
// } = destruc;
// console.log(nama, kelas, alamat, hobi1, hobi2);

// destructuring assingment to defined variable
// let kelas,
//   nama = "";
// ({ nama, kelas } = destruc);
// console.log(nama, kelas);

// default values if property undefined
// const { nama, alamat, hobi = "coding" } = destruc;
// console.log(nama, alamat, hobi);

// assigning to different local variable names
// const { nama: localNama, kelas: localKelas, alamat: localAlamat } = destruc;
// console.log(localNama, localKelas, localAlamat);

// dynamic destructuring
// const newId = "email";
// const user = { id: 1, email: "kise@gmail.com", hobi: "coding" };
// const { [newId]: id, hobi } = user;
// console.log(id);

//destructuring object contains array
// const objArr = {
//   a: [1, 2, 3, 4],
//   b: [5, 6, 7, 8],
// };
// const {
//   a: [a1, a2, a3, a4],
//   b: [b1, b2, b3, b4],
// } = objArr;
// console.log(a1, a2, a3, a4, b1, b2, b3, b4);

// let obj = { a: 1, b: [5, 6, 7, [8, 9]], c: { d: { c: { e: 6 } } } };
// console.table(obj);

// case study
const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  "favorite drink": "Es Teh",
  "favorite food": "Bakso",
  isVegan: false,
};

let name = "";
let favoriteDrink = "";
({ name, "favorite drink": favoriteDrink } = restaurant);
console.log(name, favoriteDrink);

const capital = {
  Jakarta: "Indonesia",
  London: "England",
  Tokyo: "Japan",
};
capital["New Delhi"] = "India";

console.log(capital);

// reverse object
const obj = {
  a: "one",
  b: "two",
  c: "three",
};
console.log(obj);
const reverseKey = Object.keys(obj).reverse();
let result = {};
reverseKey.forEach((val) => {
  result[val] = obj[val];
});
console.log(result);

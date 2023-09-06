// callback adalah sebuah function yang dikirimkan sebagai parameter pada function yang lain
// callback adalah sebuah function yang dieksekusi setelah function lain (function induk) selesai dijalankan

// simple synchronous callback
function show(a, b, callback) {
  console.log(callback(a, b));
}

function sum(a, b) {
  return a + b;
}

show(10, 15, sum);

// simple asynchronous callback
function request() {
  console.log("request...");
}

function get(callback) {
  console.log("get...");
  callback();
}

function showData() {
  console.log("show...");
}

request();
setTimeout(get, 1000, showData);
console.log("other process..");

// // synchronous callback (blocking) di eksekusi secara berurutan
// const dataAPI = {
//     id: 1,
//     nama: "rizki",
//     alamat: "tasikmalaya"
// }

// const processToArr = (data) => {
//     let value = [];
//     for (const key in data) {
//         value.push(data[key]);
//     }
//     return value;
// }

// function showData(data, callback) {
//     console.log(callback(data));
// }

// console.log("mulai");
// console.log(dataAPI);
// showData(dataAPI, processToArr);
// console.log("selesai");

// // asynchronous callback (AJAX)
// const XMLHttpRequest = require('xhr2');
// const myUrl = 'https://dayoffapi.vercel.app/api';

// // let response = "";
// function getHariLibur(url, error) {

//     const xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = () => {
//         if (xhttp.readyState === 4) {
//             if (xhttp.status === 200) {
//                 // response = JSON.parse(xhttp.responseText);
//                 success(xhttp);
//             } else if (xhttp.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhttp.open('GET', url, true);
//     xhttp.send();
//     // return response;
// }

// function success(xhttp) {
//     let cuti = "";
//     const response = JSON.parse(xhttp.responseText)
//     response.forEach(({ tanggal, keterangan, is_cuti }) => {
//         is_cuti === true
//             ? cuti = "cuti"
//             : cuti = "bukan cuti"
//         console.log(tanggal, keterangan, cuti);
//     });
// }

// function error() {
//     console.log("404 Not Found");
// }

// getHariLibur(myUrl, error, success);

// // function getData() {
// //     const hariLibur = getHariLibur(myUrl, error);
// //     console.log(hariLibur);
// // }
// // setTimeout(getData, 1000);

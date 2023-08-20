// callback adalah sebuah function yang dikirimkan sebagai parameter pada function yang lain
// callback adalah sebuah function yang dieksekusi setelah function lain (function induk) selesai dijalankan

// synchronous callback (blocking) di eksekusi secara berurutan
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

// asynchronous callback (AJAX)
const XMLHttpRequest = require('xhr2');
const myUrl = 'https://booking.kai.id/api/stations2';

let response = "";
function getDataStasiun(url, error) {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                response = JSON.parse(xhttp.responseText);
                response.forEach(({ code, name, city, cityname }) => {
                    console.log(
                        `kode : ${code}, nama stasiun : ${name}`
                    );
                });
            } else if (xhttp.status === 404) {
                error();
            }
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
    return response
}

function error() {
    console.log("404 Not Found");
}

console.log("start");
getDataStasiun(myUrl, error);
console.log("end");

// function getData() {
//     const dataStasiun = getDataStasiun(myUrl, error);
//     dataStasiun.forEach(({ code, name, city, cityname }) => {
//         console.log(
//             `kode : ${code}, nama stasiun : ${name}`
//         );
//     });
// }
// setTimeout(getData, 1000);


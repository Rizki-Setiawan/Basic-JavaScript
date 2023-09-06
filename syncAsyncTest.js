// synchronous
// console.log("other process1")
// console.log("other process2")
// console.log("other process3")
// console.log("other process4")
// let a = 0;
// for (let i = 0; i < 1000000000; i++) {
//     a += i
//     if (i == 1000000000 - 1) {
//         console.log("other process5");
//     }
// }
// console.log("other process6")

// asynchronous

// console.log("other process1")
// console.log("other process2")
// console.log("other process3")
// console.log("other process4")
// let a = 0;
// setTimeout(() => {
//     for (let i = 0; i < 10000000; i++) {
//         a += i
//         if (i == 10000000 - 1) {
//             console.log("other process5");
//         }
//     }
// }, 1000);
// console.log(a)

// race condition

// function get() {
//     return 10
// }

// function show(data) {
//     console.log(data);
// }

// let resultGet;

// setTimeout(() => {
//     resultGet = get();
// }, 1000)

// show(resultGet)

// console.log("fitur lain");

// solution race condition -> callback

function get(callback) {
    let data = 10;
    callback(data);
}

function show(data) {
    console.log("show", data);
}

setTimeout(get, 1000, show);

console.log("fitur lain");

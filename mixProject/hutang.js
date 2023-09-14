function UA(A, E, D, O1) {
    let hasilHtAEDO = A - E - D - O1;
    return hasilHtAEDO;
}

function UU(U, O2) {
    let hasilUO = U - O2;
    return hasilUO;
}

let A = 6;
let E = 2;
let D = 2;
let O1 = 1;
let O2 = 1;
let U = 1;

let X1 = UA(A, E, D, O1); // 1
let X2 = UU(U, O2) // 0

console.log('Uang A awal : ', A);
console.log('Uang U awal : ', U);
console.log('Uang A sekarang : ', X1);
console.log('Uang U sekarang : ', X2);
console.log('Uang A akhir : ', X1 - U);
console.log('Uang U akhir : ', X2 + X1);
console.log('Selisih Uang A', (X1 - U) - A);
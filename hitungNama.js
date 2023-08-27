const input = ["herman", "budi", "jenny", "kevin", "aris"];

function jumlahGanjil(input) {
    let hasil = "";
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        hasil += input[i] + " ";
        if (input[i].length % 2 !== 0) {
            counter++;
        }
    }
    return { hasil, counter };
}

const { hasil, counter } = jumlahGanjil(input);

console.log(`Input : ${hasil}\nOutput : ${counter}`);

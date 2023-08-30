const prompt = require("prompt-sync")({ sigint: true });
const suwit = ["gunting", "batu", "kertas"];

function check(array, input) {
	return array.includes(input);
}

let result = "";
let menang = 0;
let kalah = 0;
let seri = 0;
while (true) {
	let player = prompt("Masukan pilihan : ");
	if (check(suwit, player)) {
		let computer = suwit[Math.floor(Math.random() * 3)];
		if (player == "gunting") {
			computer == "gunting"
				? (result = "seri")
				: computer == "batu"
				? (result = "kalah")
				: computer == "kertas"
				? (result = "menang")
				: (result = "tidak Valid");
		} else if (player == "batu") {
			computer == "gunting"
				? (result = "menang")
				: computer == "batu"
				? (result = "seri")
				: computer == "kertas"
				? (result = "kalah")
				: (result = "tidak Valid");
		} else if (player == "kertas") {
			computer == "gunting"
				? (result = "kalah")
				: computer == "batu"
				? (result = "menang")
				: computer == "kertas"
				? (result = "seri")
				: (result = "tidak Valid");
		}
		if (result == "menang") {
			menang++;
		} else if (result == "kalah") {
			kalah++;
		} else {
			seri++;
		}
		console.log("==========================");
		console.log(
			`Player : ${player}\nComputer : ${computer}\nHasil : ${result}`,
		);
		console.log(`Menang : ${menang}\nKalah : ${kalah}\nSeri : ${seri}`);
		console.log("==========================");
		const main = prompt("Main lagi? (y/n) : ");
		if (main == "N" || main == "n") {
			process.exit(0);
		}
	} else {
		console.log("Input tidak valid");
	}
}

// tebak angka
// console.log("Aplikasi Tebak Angka 1-10");
// const random = Math.floor(Math.random() * (11 - 1) + 1);
// let input = 0;
// while (input !== random) {
// 	input = prompt("Masukan tebakan : ");
// 	if (input == random) {
// 		console.log("Selamat, tebakan benar");
// 		process.exit(0);
// 	} else {
// 		console.log("Tebakan salah, coba lagi!!!");
// 	}
// }

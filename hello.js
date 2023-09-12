//testing ssh-key
console.log("Hello, test my ssh-key...");
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
let result = myArray.reverse();
console.log(result);

console.log("fitur search");

function myFunction(nama) {
  console.log(`Halo ${nama}`);
}

myFunction("kise");
for (const iterator of myArray.reverse()) {
  console.log(iterator)
}

class Bike {
  constructor(nama) {
    this.nama = nama;
  }
  say() {
    console.log(`halo ${this.nama}`)
  }
}

const myBike = new Bike("Rizki");
myBike.say();

console.log("OK");

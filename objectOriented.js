// object car
const car = {
	// properties
	brand: "honda",
	color: "blue",
	maxSpeed: "200",

	// methods
	drive: () => {
		return "driving " + car.brand;
	},
	reverse: () => console.log("reverse"),
	turn: () => console.log("turning"),
};

console.log(car.drive());
console.log("maxSpeed :", car.maxSpeed);

// constructor function

function Car(brand, color, maxSpeed) {
	this.brand = brand;
	this.color = color;
	this.maxSpeed = maxSpeed;
}

Car.prototype.drive = function () {
	console.log(`driving with ${this.brand}`);
};

// membuat object myCar dengan constructor function Car

const myCar = new Car("nissan", "red", "250");
console.log(myCar);
myCar.drive();

// constructor function dengan class (ES6)
class Bike {
	constructor(brand, color, maxSpeed) {
		this.brand = brand;
		this.color = color;
		this.maxSpeed = maxSpeed;
	}

	drive() {
		console.log(`riding with ${this.color + " " + this.brand}`);
	}

}

const yamaha = new Bike("yamaha", "red", "300");
console.log(yamaha);
yamaha.drive();

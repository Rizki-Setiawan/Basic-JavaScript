/* property */
// data property menampung nilai di constructor dari instance class myMail
class Mail {
	constructor(sender, receiver, subject, body) {
		this.sender = sender;
		this.receiver = receiver;
		this.subject = subject;
		this.body = body; 
		this.time = new Date();
	}
}

const myMail = new Mail('kise', 'rizki', 'testing mail', 'this is mail body');
// edit property saat object sudah dibuat
myMail.subject = 'report mail - edited';
console.log(myMail);

// accessor property dengan getter dan setter
class Bike {
	constructor(brand, type) {
		this.brand = brand;
		this.type = type;
		this._chassisNumber = `${brand} - ${type} - ${Math.floor(Math.random() * 1000)}`; // private property
	}
	get chassisNumber() {
		return this._chassisNumber;
	}
	set chassisNumber(chassisNumber) {
		console.log("tidak diijinkan mengubah chassisNumber");
	}

}

const myBike = new Bike('honda', 'cbr');
console.log(myBike.chassisNumber); // get chassisNumber
// edit property saat object sudah dibuat
myBike.chassisNumber = 'new chassisNumber'; // set chassisNumber
console.log(myBike);

/* method */
class Car {
	constructor(brand, color, maxspeed) {
		this.brand = brand;
		this.color = color;
		this.maxspeed = maxspeed;
		this._chassisNumber = this._generateChassisNumber();
	}

	// private method
	_generateChassisNumber() {
		return `${Math.floor(Math.random() * 1000)}`;
	}

	get chassisNumber() {
		return this._chassisNumber;
	}

	set chassisNumber(chassisNumber) {
		console.log("tidak diijinkan set value");
	}

	// method menerima sebuah argumen
	turn(direction) {
		return `${this.brand} no ${this.chassisNumber} belok ke ${direction}`;
	}
}

const myCar = new Car('BMW', 'blue', '350');
console.log(myCar);
console.log(myCar.turn('kanan'));


/* member visibility */
// hak akses private dengan tanda #

class Truck {
	#chassisNumber = null; // member visibility private property -> wajib enclosing class

	constructor(brand) {
		this.brand = brand;
		this.#chassisNumber = this.#generateChassisNumber();
	}

	// member visibility -> private method
	#generateChassisNumber() {
		return `${Math.floor(Math.random() * 1000)}`;
	}

	get chassisNumber() {
		return this.#chassisNumber;
	}

	set chassisNumber(chassisNumber) {
		console.log('tidak diijinkan set value');
	}

}

const myTruck = new Truck('scania');
console.log(myTruck);
console.log(myTruck.brand, myTruck.chassisNumber);

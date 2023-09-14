const coffeeStock ={
	arabica:10,
	robusta:12,
	liberica:20
}

const isMachineReady = true;

const createCoffee = (qty)=>{
	console.log(`create ${qty} cup of coffee`);
}


module.exports = {coffeeStock, isMachineReady, createCoffee}
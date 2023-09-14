const { coffeeStock, isMachineReady, createCoffee } = require('./exportCommonJS.js');
console.log(`arabica stock : ${coffeeStock['arabica']}`);
console.log(`machine ready : ${isMachineReady}`);
createCoffee(15);
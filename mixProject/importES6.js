import {pizzaStock as stock, isOvenReady, createPizza} from './exportES6.js';

console.log(`stock of papperoni pizza : ${stock.papperoni}`);
console.log(`oven ready : ${isOvenReady}`);
createPizza(8);

// for (let i = 0; i <= 20; i++) {
//   let isModZero = 0;
//   for (let j = 1; j <= i; j++) {
//     i % j == 0 ? isModZero++ : "";
//   }
//   isModZero == 2 ? console.log(i, "Prima") : console.log(i);
// }

// const input = [0, 23, 1, 10, 123, 2, 3, 5, 7, 6, 8, 11];
// const isPrime = (input) => {
//   const output = [];
//   for (let iterator = 0; iterator < input.length; iterator++) {
//     let isMod = 0;
//     for (let checker = 0; checker <= input[iterator]; checker++) {
//       input[iterator] % checker == 0 ? isMod++ : "";
//     }

//     isMod == 2 ? output.push(input[iterator]) : "";
//   }
//   return output;
// }
// console.table(input);
// console.table(isPrime(input));

function isPrime(arrayInput) {
  for (let iterator = 2; iterator < arrayInput; iterator++) {
    // eslint-disable-next-line require-jsdoc
    if (arrayInput % iterator === 0) {
      return false;
    }
  }
  return arrayInput !== 1 && arrayInput !== 0;
}

const arrayInput = [0, 23, 2, 4, 17, 5, 25, 23, 30];
const primes = arrayInput.filter(isPrime);
console.log(primes);

console.log("hallo");

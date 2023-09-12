// kode imperatif (how to solve)
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// kode deklaratif (what to solve)
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2);
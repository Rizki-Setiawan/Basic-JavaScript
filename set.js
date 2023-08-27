const numberSet = new Set([1, 2, 3, 3, 2, 5, 5, 6, 4]);
console.log(numberSet);
numberSet.add(100);
console.log(numberSet);
numberSet.forEach((value) => {
    console.log(value);
});

const food = new Set(["bakso", "mie", "ayam", "bakso", "pizza"]);
console.log(food);
console.log(food.delete("ayam"), food);

function showLetters(letters) {
    let text = "";
    for (const x of letters.values()) {
        text += x + " ";
    }
    return text;
}
const letters = new Set(["a", "b", "c"]);
console.log(showLetters(letters));

const mySet = new Set([1, 2, 3]);
const dataInput = [4, 5, 6];
// const mergeSet = new Set([...mySet, ...dataInput])
// console.log(mergeSet);
console.log(mySet);
mySet.add(dataInput);
console.log(mySet);
console.log(mySet.delete(dataInput));
console.log(mySet);

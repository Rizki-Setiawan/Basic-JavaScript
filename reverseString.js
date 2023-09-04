// reverse string + palindrom check
function reverse(kata) {
  let strReverse = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    strReverse += kata[i];
  }
  return strReverse;
}

function checkPalindrome(kata, reverse) {
  let isPalindrome = "";
  reverse(kata) === kata
    ? (isPalindrome = "Palindrome")
    : (isPalindrome = "Tidak Palindrome");
  return isPalindrome;
}

let kata = "palindrome";
console.log(
  `  Kata awal : ${kata}\n
  Kata reverse : ${reverse(kata)}\n
  Merupakan kata ${checkPalindrome(kata, reverse)}`
);

// function reverseString(str) {
//   return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
// }
// console.log(reverseString("hello"));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

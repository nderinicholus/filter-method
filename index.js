// Filter method


// 1. Even and Odd Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log("Even Numbers List: " + evenNums);
console.log("Odd Numbers List: " + oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}


// 2. Adults and Children list
const ages = [12, 14, 15, 16, 18, 22, 24, 30, 42];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log("Children: " + children);
console.log("Adults: " + adults);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}

// Display words with short words < 6
const words = ["apple", "orange", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log("Short words: " + shortWords);
console.log("Long words: " + longWords);


function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}
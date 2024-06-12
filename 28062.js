const fs = require("fs");
const input = fs
  .readFileSync("./input/28062.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input.shift();
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (n === 1) {
  if (arr[0] % 2 === 0) {
    return console.log(arr[0]);
  } else {
    return console.log(0);
  }
}

let sum = arr.reduce((a, b) => a + b);

if (sum % 2 !== 0) {
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      sum -= arr[i];
      break;
    }
  }

  return console.log(sum);
}

console.log(sum);

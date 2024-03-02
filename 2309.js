const fs = require("fs");
const input = fs
  .readFileSync("./input/2309.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const arr = input.sort((a, b) => a - b).map(Number);
const sum = arr.reduce((a, b) => a + b);
let result = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (sum - (arr[i] + arr[j]) === 100) {
      result = arr.filter((value) => value !== arr[i] && value !== arr[j]);
      break;
    }
  }
}

console.log(result.join("\n"));

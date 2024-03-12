const fs = require("fs");
const input = fs
  .readFileSync("./input/17608.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const arr = input.map(Number).reverse();
let top = arr[0];
let result = 1;
for (let i = 1; i < arr.length; i++) {
  if (top < arr[i]) {
    top = arr[i];
    result++;
  }
}

console.log(result);

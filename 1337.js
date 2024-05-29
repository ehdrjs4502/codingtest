const fs = require("fs");
const input = fs.readFileSync("./input/1337.txt").toString().trim().split("\n");

const n = +input.shift();
let arr = input.map(Number).sort((a, b) => a - b);
const MAX = 5;
let result = 4;
let start = 0;
let end = 0;

while (end < n) {
  if (arr[end] - arr[start] < MAX) {
    end++;
    result = Math.min(result, MAX - (end - start));
  } else {
    start++;
  }
}

console.log(result);

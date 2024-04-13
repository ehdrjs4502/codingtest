const fs = require("fs");
let input = fs
  .readFileSync("./input/14469.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
let result = 0;
const arr = input.map((value) => value.split(" ")).sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
  if (result > arr[i][0]) {
    result += +arr[i][1];
  } else {
    result = +arr[i][0] + +arr[i][1];
  }
}
console.log(result);

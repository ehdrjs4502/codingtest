const fs = require("fs");
let input = fs
  .readFileSync("./input/13417.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const resultArr = [];

for (let i = 0; i < t; i++) {
  const n = input.shift();
  const arr = input.shift().split(" ");
  const result = [arr.shift()];
  for (let j = 0; j < n - 1; j++) {
    if (result[0] >= arr[j]) {
      result.unshift(arr[j]);
    } else {
      result.push(arr[j]);
    }
  }
  resultArr.push(result.join(""));
}

console.log(resultArr.join("\n"));

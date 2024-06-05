const fs = require("fs");
const input = fs
  .readFileSync("./input/11582.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const k = +input.shift();
const result = [];
let temp = [];

for (let i = 0; i < n; i += n / k) {
  temp = arr.slice(i, n / k + i);
  temp.sort((a, b) => a - b);
  result.push(...temp);
}

console.log(result.join(" "));

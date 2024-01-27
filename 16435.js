const fs = require("fs");
const input = fs
  .readFileSync("./input/16435.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let [n, l] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  if (l < arr[i]) {
    return console.log(l);
  }
  l++;
}
console.log(l);

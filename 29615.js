const fs = require("fs");
let input = fs
  .readFileSync("./input/29615.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ");
const arr = input.shift().split(" ");
const friends = input.shift().split(" ");
let count = 0;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[j] === friends[i]) {
      count++;
    }
  }
}
console.log(m - count);

const fs = require("fs");
let input = fs
  .readFileSync("./input/2015.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, k] = input.shift().split(" ");

let sum = 0;
let result = 0;
const map = new Map([[0, 1]]);

const arr = input[0].split(" ").map(Number);

for (num of arr) {
  sum += num;

  if (map.has(sum - k)) {
    result += map.get(sum - k);
  }

  map.set(sum, (map.get(sum) || 0) + 1);
}

console.log(result);

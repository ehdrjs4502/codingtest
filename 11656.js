const fs = require("fs");
const input = fs.readFileSync("./input/11656.txt").toString().trim();

const arr = [];
const n = input.length;

for (let i = 0; i < n; i++) {
  arr.push(input.substring(i));
}

console.log(arr.sort().join("\n"));

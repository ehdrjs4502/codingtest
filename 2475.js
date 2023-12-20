const fs = require("fs");
const input = fs.readFileSync("./input/2475.txt").toString().trim();

let sum = 0;

input
  .split(" ")
  .map(Number)
  .map((value) => {
    sum += value ** 2;
  });

console.log(sum % 10);

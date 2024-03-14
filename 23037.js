const fs = require("fs");
const input = fs.readFileSync("./input/23037.txt").toString().trim();

const result = input
  .split("")
  .map((value) => Number(value) ** 5)
  .reduce((a, b) => a + b);

console.log(result);

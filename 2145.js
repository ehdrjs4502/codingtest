const fs = require("fs");
const input = fs
  .readFileSync("./input/2145.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

const result = [];

input.map((value) => {
  const arr = value.split("").map(Number);
  let sum = arr.reduce((a, b) => a + b);

  while (sum >= 10) {
    sum = String(sum)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
  }

  result.push(sum);
});

console.log(result.join("\n"));

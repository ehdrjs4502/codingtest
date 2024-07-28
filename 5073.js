const fs = require("fs");
const input = fs.readFileSync("./input/5073.txt").toString().trim().split("\n");

input.pop();
const result = [];

input.forEach((value) => {
  const [a, b, c] = value
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (a + b <= c) {
    result.push("Invalid");
  } else if (a === b && a === c && b === c) {
    result.push("Equilateral");
  } else if (a !== b && a !== c && b !== c) {
    result.push("Scalene");
  } else {
    result.push("Isosceles");
  }
});

console.log(result.join("\n"));

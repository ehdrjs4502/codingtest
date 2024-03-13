const fs = require("fs");
const input = fs
  .readFileSync("./input/2495.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const result = [];

for (let i = 0; i < input.length; i++) {
  let max = 1;
  let count = 1;
  for (let j = 1; j < input[i].length; j++) {
    if (input[i][j] === input[i][j - 1]) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 1;
    }
  }

  result.push(max);
}

console.log(result.join("\n"));

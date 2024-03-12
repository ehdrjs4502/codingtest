const fs = require("fs");
const input = fs
  .readFileSync("./input/1100.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let result = 0;

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < 8; j += 2) {
      input[i][j] === "F" && result++;
    }
  } else {
    for (let j = 1; j < 8; j += 2) {
      input[i][j] === "F" && result++;
    }
  }
}

console.log(result);

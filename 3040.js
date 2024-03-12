const fs = require("fs");
const input = fs.readFileSync("./input/3040.txt").toString().trim().split("\n").map(Number);

const sum = input.reduce((a, b) => a + b);
let result;
for (let i = 0; i < 8; i++) {
  for (let j = 1; j < 9; j++) {
    if (sum - (input[i] + input[j]) === 100) {
      if (input[i] !== input[j]) {
        result = input.filter((value) => value !== input[i] && value !== input[j]);
      }
    }
  }
}

console.log(result.join("\n"));

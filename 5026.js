const fs = require("fs");
const input = fs
  .readFileSync("./input/5026.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const result = [];
for (let i = 0; i < n; i++) {
  if (input[i][0] === "P") {
    result.push("skipped");
  } else {
    result.push(eval(input[i]));
  }
}

console.log(result.join("\n"));

const fs = require("fs");
const input = fs
  .readFileSync("./input/12605.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

for (let i = 1; i <= n; i++) {
  const stack = [];
  const arr = input[i - 1].split(" ");

  arr.forEach((value) => stack.push(value));

  console.log(`Case #${i}: ${stack.reverse().join(" ")}`);
}

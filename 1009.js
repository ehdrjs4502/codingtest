const fs = require("fs");
const input = fs
  .readFileSync("./input/1009.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let num = 1;
  for (let j = 0; j < b; j++) {
    num = (num * a) % 10;
  }
  result.push(num === 0 ? 10 : num);
}

console.log(result.join("\n"));

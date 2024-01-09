const fs = require("fs");
const input = fs
  .readFileSync("./input/9372.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const T = input.shift();
let result = [];

let idx = 0;

for (let i = 0; i < T; i++) {
  const [N, M] = input[idx].split(" ").map(Number);
  idx += M + 1;
  result.push(N - 1);
}

console.log(result.join("\n"));

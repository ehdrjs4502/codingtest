const fs = require("fs");
const input = fs
  .readFileSync("./input/5576.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const w = [];
const k = [];
let wSum = 0;
let kSum = 0;

for (let i = 0; i < 10; i++) {
  w.push(+input[i]);
}

for (let i = 10; i < 20; i++) {
  k.push(+input[i]);
}

w.sort((a, b) => b - a);
k.sort((a, b) => b - a);

for (let i = 0; i < 3; i++) {
  wSum += w[i];
  kSum += k[i];
}

console.log(wSum, kSum);

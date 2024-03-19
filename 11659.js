const fs = require("fs");
const input = fs
  .readFileSync("./input/11659.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ");

const arr = input.shift().split(" ").map(Number);
const sumArr = [arr[0]];
const result = [];

for (let i = 1; i < arr.length; i++) {
  sumArr.push(sumArr[i - 1] + arr[i]);
}

for (let i = 0; i < m; i++) {
  const [start, end] = input[i].split(" ");
  result.push(sumArr[end - 1] - (sumArr[start - 2] || 0));
}

console.log(result.join("\n"));

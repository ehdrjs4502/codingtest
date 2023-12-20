const fs = require("fs");
const input = fs
  .readFileSync("./input/2776.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  let result = [];
  const n = input.shift();
  const map = new Map();
  let arr1 = input.shift().split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    map.set(arr1[i], 0);
  }

  const m = input.shift();
  let arr2 = input.shift().split(" ").map(Number);

  for (let i = 0; i < m; i++) {
    map.has(arr2[i]) ? result.push(1) : result.push(0);
  }

  console.log(result.join("\n"));
}

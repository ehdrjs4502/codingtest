const fs = require("fs");
const input = fs
  .readFileSync("./input/2865.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m, k] = input.shift().split(" ").map(Number);
let members = input.map((value) => value.split(" ").map(Number));
let topGenre = Array(n + 1).fill(0);
let result = 0;

for (let i = 0; i < m; i++) {
  const arr = members[i];
  for (let j = 0; j < arr.length; j += 2) {
    let num = arr[j];
    let score = arr[j + 1];
    topGenre[num] = Math.max(score, topGenre[num]);
  }
}

topGenre.shift();
topGenre = topGenre.sort((a, b) => b - a);

for (let i = 0; i < k; i++) {
  result += topGenre[i];
}

console.log(result.toFixed(1));

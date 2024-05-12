const fs = require("fs");
const input = fs.readFileSync("./input/2167.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = [];
const sumArr = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
const result = [];

for (let i = 1; i <= n; i++) {
  arr[i] = input.shift().split(" ").map(Number);
  arr[i].unshift(0);
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sumArr[i][j] = sumArr[i - 1][j] + sumArr[i][j - 1] - sumArr[i - 1][j - 1] + arr[i][j];
  }
}

const k = +input.shift();

for (let n = 0; n < k; n++) {
  const [i, j, x, y] = input[n].split(" ").map(Number);
  let sum = sumArr[x][y] - sumArr[i - 1][y] - sumArr[x][j - 1] + sumArr[i - 1][j - 1];
  result.push(sum);
}

console.log(result.join("\n"));

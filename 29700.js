const fs = require("fs");
const input = fs.readFileSync("./input/29700.txt").toString().trim().split("\n");

const [n, m, k] = input.shift().split(" ").map(Number);
const arr = input.map((value) => value.split("").map(Number));

let result = 0;

for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += arr[i][j];
  }
  if (sum === 0) result++;

  for (let o = 1; o < m - k + 1; o++) {
    sum = sum - arr[i][o - 1] + arr[i][o + k - 1];
    if (sum === 0) result++;
  }
}

console.log(result);

const fs = require("fs");
const input = fs
  .readFileSync("./input/12760.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const score = Array(n).fill(0);
const result = [];
const arr = input.map((value) =>
  value
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)
);

for (let i = 0; i < m; i++) {
  let max = 0;

  for (let j = 0; j < n; j++) {
    max = Math.max(max, arr[j][i]);
  }

  for (let j = 0; j < n; j++) {
    if (max == arr[j][i]) {
      score[j] += 1;
    }
  }
}

const maxScore = Math.max(...score);

score.forEach((value, idx) => {
  if (value === maxScore) {
    result.push(idx + 1);
  }
});

console.log(result.join(" "));

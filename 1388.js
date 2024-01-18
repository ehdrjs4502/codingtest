const fs = require("fs");
const input = fs
  .readFileSync("./input/1388.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ");
const floor = [...input].map((value) => value.split(""));
let result = 0;

// 가로
for (let i = 0; i < n; i++) {
  let flag = true;
  for (let j = 0; j < m; j++) {
    if (flag == true && floor[i][j] == "-") {
      result++;
      flag = false;
    } else if (floor[i][j] == "|") {
      flag = true;
    }
  }
}

// 세로
for (let i = 0; i < m; i++) {
  let flag = true;
  for (let j = 0; j < n; j++) {
    if (flag == true && floor[j][i] == "|") {
      result++;
      flag = false;
    } else if (floor[j][i] == "-") {
      flag = true;
    }
  }
}

console.log(result);

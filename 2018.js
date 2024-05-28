const fs = require("fs");
const input = fs.readFileSync("./input/2018.txt").toString().trim().split("\n");

const n = +input.shift();
let result = 0;
let start = 1;
let end = 1;
let sum = 1;

while (start <= end) {
  if (sum == n) {
    result++;
  }

  if (sum >= n) {
    sum -= start;
    start++;
  } else {
    end++;
    sum += end;
  }
}

console.log(result);

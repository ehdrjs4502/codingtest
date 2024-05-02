const fs = require("fs");
const input = fs
  .readFileSync("./input/1300.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input[0];
const k = +input[1];
let start = 1;
let end = n * n;
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt += Math.min(n, parseInt(mid / i));
  }

  if (cnt >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(result);

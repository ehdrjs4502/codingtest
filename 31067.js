const fs = require("fs");
const input = fs
  .readFileSync("./input/31067.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, k] = input.shift().split(" ").map(Number);
let trackArr = input.shift().split(" ").map(Number);
let count = 0;

for (let i = 1; i < n; i++) {
  if (trackArr[i - 1] >= trackArr[i]) {
    trackArr[i] += k;
    count++;
    if (trackArr[i - 1] >= trackArr[i]) {
      return console.log(-1);
    }
  }
}

console.log(count);

/**
 점점 커져야함
 앞에 얘랑 비교해서 작으면 k 더해보고 더해도 작으면 -1?
 */

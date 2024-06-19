const fs = require("fs");
const input = fs
  .readFileSync("./input/2961.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input.shift();
let result = 999999999;
const arr = input.map((v) => v.split(" ").map(Number));

for (let i = 1; i < 1 << n; i++) {
  let sour = 1;
  let bitter = 0;
  for (let j = 0; j < n; j++) {
    if ((i & (1 << j)) > 0) {
      sour *= arr[j][0];
      bitter += arr[j][1];
    }
  }

  result = Math.min(result, Math.abs(sour - bitter));
}

console.log(result);

const fs = require("fs");
const input = fs
  .readFileSync("./input/2828.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let [n, m] = input.shift().split(" ").map(Number);
const j = input.shift();
let result = 0;
let start = 1;
let end = m;

for (let i = 0; i < j; i++) {
  const apple = +input[i];
  if (end < apple) {
    result += apple - end;
    end = apple;
    start = apple - (m - 1);
  } else if (start > apple) {
    result += start - apple;
    start = apple;
    end = apple + (m - 1);
  }
}

console.log(result);

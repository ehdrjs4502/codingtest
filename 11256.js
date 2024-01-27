const fs = require("fs");
const input = fs
  .readFileSync("./input/11256.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  let result = 0;
  let [candyCount, n] = input.shift().split(" ").map(Number);
  const arr = [];

  for (let j = 0; j < n; j++) {
    const [x, y] = input.shift().split(" ");
    arr.push(x * y);
  }

  arr.sort((a, b) => b - a);

  for (let k = 0; k < n; k++) {
    candyCount = candyCount - arr[k];
    if (candyCount <= 0) {
      result = k + 1;
      break;
    }
  }

  console.log(result);
}

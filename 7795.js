const fs = require("fs");
const input = fs.readFileSync("./input/7795.txt").toString().trim().split("\n");

const t = input.shift();

for (a of t) {
  const [n, m] = input.shift().split(" ").map(Number);
  const a = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const b = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let aIndex = 0;
  let bIndex = 0;
  let result = 0;

  while (aIndex < n) {
    if (a[aIndex] > b[bIndex]) {
      bIndex++;
    } else {
      result += bIndex;
      aIndex++;
    }
  }

  console.log(result);
}

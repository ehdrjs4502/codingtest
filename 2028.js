const fs = require("fs");
const input = fs
  .readFileSync("./input/2028.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  let num = input[i];
  let sqr = String(num ** 2).split("");
  let sqrIdx = sqr.length - num.length;
  let numIdx = 0;
  let isTrue = true;

  while (sqrIdx <= sqr.length) {
    if (sqr[sqrIdx] !== num[numIdx]) {
      isTrue = false;
      break;
    }
    sqrIdx++;
    numIdx++;
  }

  result.push(isTrue ? "YES" : "NO");
}

console.log(result.join("\n"));

const fs = require("fs");
const input = fs
  .readFileSync("./input/20114.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, h, w] = input.shift().split(" ").map(Number);
const result = Array(n).fill("?");

input.forEach((value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "?") {
      continue;
    } else {
      result[Math.floor(i / w)] = value[i];
    }
  }
});

console.log(result.join(""));

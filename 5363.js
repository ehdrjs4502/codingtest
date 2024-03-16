const fs = require("fs");
const input = fs
  .readFileSync("./input/5363.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const arr = input[i].split(" ");
  arr.push(arr.shift());
  arr.push(arr.shift());

  console.log(arr.join(" "));
}

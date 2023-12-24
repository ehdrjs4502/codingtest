const fs = require("fs");
const input = fs
  .readFileSync("./input/5635.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const arr = input.map((value) => {
  return value.split(" ");
});

arr.sort((a, b) => {
  if (a[3] == b[3] && a[2] == b[2]) return Number(a[1]) - Number(b[1]);
  if (a[3] == b[3]) return Number(a[2]) - Number(b[2]);
  return Number(a[3]) - Number(b[3]);
});

console.log(arr[arr.length - 1][0] + "\n" + arr[0][0]);

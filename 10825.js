const fs = require("fs");
const input = fs
  .readFileSync("./input/10825.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const arr = input.map((value) => value.split(" ").map((val) => Number(val) || val));

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }

  if (a[2] !== b[2]) {
    return a[2] - b[2];
  }

  if (a[3] !== b[3]) {
    return b[3] - a[3];
  }

  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
});

console.log(arr.map((value) => value[0]).join("\n"));

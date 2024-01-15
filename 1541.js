const fs = require("fs");
const input = fs.readFileSync("./input/1541.txt").toString().trim();

const arr = input.split("-").map((value) =>
  value
    .split("+")
    .map(Number)
    .reduce((pre, cur) => pre + cur)
);

console.log(arr[0] * 2 - arr.reduce((pre, cur) => pre + cur));

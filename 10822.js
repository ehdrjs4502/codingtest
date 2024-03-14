const fs = require("fs");
const input = fs.readFileSync("./input/10822.txt").toString().trim();

console.log(
  input
    .split(",")
    .map(Number)
    .reduce((a, b) => a + b)
);

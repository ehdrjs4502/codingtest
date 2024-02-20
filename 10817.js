const fs = require("fs");
const input = fs.readFileSync("./input/10817.txt").toString().trim();

console.log(
  input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)[1]
);

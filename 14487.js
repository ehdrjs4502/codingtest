const fs = require("fs");
const input = fs
  .readFileSync("./input/14487.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const sum = input[0]
  .split(" ")
  .map(Number)
  .reduce((pre, cur) => pre + cur);

const max = Math.max(...input[0].split(" ").map(Number));

console.log(sum - max);

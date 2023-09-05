const fs = require("fs");
const input = fs.readFileSync("./input/10818.txt").toString().trim().split("\n");

input.shift();

const arr = input[0].split(" ");
const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);

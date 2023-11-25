const fs = require("fs");
const input = fs.readFileSync("./input/27323.txt").toString().trim().split("\n");

console.log(input[0] * input[1]);

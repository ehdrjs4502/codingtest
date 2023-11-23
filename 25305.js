const fs = require("fs");
const input = fs.readFileSync("./input/25305.txt").toString().trim().split("\n");

const k = Number(input.shift().split(" ")[1]);

console.log(input[0].split(" ").sort((a, b) => b - a)[k - 1]);

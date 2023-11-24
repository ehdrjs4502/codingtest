const fs = require("fs");
const input = fs.readFileSync("./input/2869.txt").toString().trim();

let [A, B, V] = input.split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));

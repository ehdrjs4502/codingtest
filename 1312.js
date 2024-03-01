const fs = require("fs");
const input = fs.readFileSync("./input/1312.txt").toString().trim();

const [a, b, n] = input.split(" ");
let num = a % b;

for (let i = 0; i < n - 1; i++) {
  num *= 10;
  num %= b;
}

num *= 10;

console.log(Math.floor(num / b));

const fs = require("fs");
const input = fs.readFileSync("./input/1212.txt").toString().trim();

if (input === 0) return console.log(0);

let result = parseInt(input[0], 8).toString(2);

for (let i = 1; i < input.length; i++) {
  const binary = parseInt(input[i], 8).toString(2).padStart(3, 0);
  result += binary;
}

console.log(result);

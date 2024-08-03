const fs = require("fs");
const input = fs.readFileSync("./input/5393.txt").toString().trim().split("\n");

const t = +input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  let sum = 0;
  const num = +input[i];
  if (num % 2 == 0) sum += num / 2;
  else sum += num / 2 + 1;

  if (num % 6 == 0 || num % 6 == 4) sum += num / 3;
  else sum += num / 3 + 1;
  result.push(sum);
}

console.log(result.join("\n"));

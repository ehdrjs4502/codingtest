const fs = require("fs");
const input = fs.readFileSync("./input/14916.txt").toString().trim();

let num = Number(input);
let result = 0;

if (num == 1 || num == 3) {
  return console.log(-1);
}

while (num > 0) {
  if (num % 2 === 1 || num % 5 === 0) {
    result++;
    num -= 5;
  } else if (num % 2 === 0) {
    result++;
    num -= 2;
  }
}

console.log(result);

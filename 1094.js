const fs = require("fs");
const input = fs.readFileSync("./input/1094.txt").toString();

let x = Number(input).toString(2);
let count = 0;

for (let i = 0; i < x.length; i++) {
  if (x[i] == 1) {
    count++;
  }
}

console.log(count);

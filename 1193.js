const fs = require("fs");
const input = fs.readFileSync("./input/1193.txt").toString().trim();

let num = +input;
let line = 1;
let a = 0;
let b = 0;

while (num > line) {
  num -= line;
  line += 1;
}

if (line % 2 == 0) {
  a = num;
  b = line - num + 1;
} else if (line % 2 == 1) {
  a = line - num + 1;
  b = num;
}

console.log(`${a}/${b}`);

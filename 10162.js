const fs = require("fs");
let input = Number(fs.readFileSync("./input/10162.txt").toString().trim());

let A = 0;
let B = 0;
let C = 0;

if (input >= 300) {
  A = Math.floor(input / 300);
  input = input % 300;
}

if (input >= 60) {
  B = Math.floor(input / 60);
  input = input % 60;
}

if (input >= 10) {
  C = Math.floor(input / 10);
  input = input % 10;
}

if (input != 0) {
  return console.log(-1);
}

console.log(A, B, C);

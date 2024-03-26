const fs = require("fs");
const input = fs
  .readFileSync("./input/1205.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, newGrade, p] = input.shift().split(" ").map(Number);
if (n === 0) return console.log(1);
const arr = input.shift().split(" ").map(Number);
arr.push(newGrade);
arr.sort((a, b) => b - a);
const idxArr = [];
let idx = arr.indexOf(newGrade);

while (idx != -1) {
  idxArr.push(idx + 1);
  idx = arr.indexOf(newGrade, idx + 1);
}

idxArr[idxArr.length - 1] > p ? console.log(-1) : console.log(idxArr[0]);

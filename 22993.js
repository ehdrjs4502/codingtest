const fs = require("fs");
const input = fs
  .readFileSync("./input/22993.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
let arr = input.shift().split(" ").map(Number);
let junwon = arr.shift();
arr.sort((a, b) => a - b);

for (num of arr) {
  if (junwon > num) {
    junwon += num;
  } else {
    return console.log("No");
  }
}

console.log("Yes");

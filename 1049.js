const fs = require("fs");
const input = fs
  .readFileSync("./input/1049.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let [n, m] = input.shift().split(" ");
const minPackage = Math.min(...input.map((value) => value.split(" ")[0]));
const minOne = Math.min(...input.map((value) => value.split(" ")[1]));
let result = 0;

while (true) {
  const useSet = Math.floor(n / 6);
  if (n < 6) {
    result += Math.min(minOne * n, minPackage);
    break;
  } else {
    result += Math.min(minPackage * useSet, minOne * (useSet * 6));
    n -= 6 * useSet;
  }
}

console.log(result);

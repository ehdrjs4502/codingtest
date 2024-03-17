const fs = require("fs");
const input = fs
  .readFileSync("./input/1107.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const ch = input.shift();

if (ch === "100") return console.log(0);
const n = input.shift();
let result = Math.abs(100 - ch);
let arr = [];
if (n != 0) {
  arr = input.shift().split(" ");
}
for (let i = 0; i < 1000000; i++) {
  const str = i.toString();
  let isValid = true;

  for (let j = 0; j < str.length; j++) {
    if (arr?.includes(str[j])) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    result = Math.min(result, Math.abs(i - ch) + str.length);
  }
}

console.log(result);

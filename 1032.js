const fs = require("fs");
const input = fs
  .readFileSync("./input/1032.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
let result = "";

for (let i = 0; i < input[0].length; i++) {
  const str = input[0][i];
  if (input.some((value) => value[i] !== str)) {
    result += "?";
  } else {
    result += str;
  }
}

console.log(result);

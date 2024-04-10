const fs = require("fs");
const input = fs
  .readFileSync("./input/1254.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const str = input.shift();
const reverse = str.split("").reverse().join("");

if (reverse == str) {
  console.log(reverse.length);
  return;
}

for (let i = 1; i < str.length; i++) {
  let arr = str.split("").slice(i).join("");
  const reverseArray = str.split("").slice(i).reverse().join("");
  if (arr === reverseArray) {
    console.log(str.length + i);
    break;
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("./input/1544.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const set = new Set();

set.add(input.shift());

input.map((value) => {
  let str = value;
  for (let i = 0; i < value.length; i++) {
    if (set.has(str)) {
      return;
    } else {
      firstWord = str[0];
      str = str.substring(1);
      str = str + firstWord;
    }
  }
  set.add(value);
});

console.log(set.size);

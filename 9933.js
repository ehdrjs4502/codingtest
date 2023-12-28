const fs = require("fs");
const input = fs
  .readFileSync("./input/9933.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const set = new Set([...input]);
let len = 0;
let char = 0;

input.map((vaule) => {
  const reverse = [...vaule].reverse().join("");

  if (set.has(reverse)) {
    len = reverse.length;
    char = reverse.charAt(reverse.length / 2);
  }
});

console.log(len, char);

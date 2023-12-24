const fs = require("fs");
const input = fs
  .readFileSync("./input/1822.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const a = new Map();

input[0].split(" ").map((value) => {
  a.set(value, 0);
});

input[1].split(" ").map((value) => {
  if (a.has(value)) {
    a.delete(value);
  }
});

console.log(a.size);
if (a.size > 0) {
  const arr = [...a.keys()].map(Number).sort((a, b) => a - b);
  console.log(arr.join(" "));
}

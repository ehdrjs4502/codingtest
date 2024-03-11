const fs = require("fs");
const input = fs
  .readFileSync("./input/20949.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());

const arr = [];

for (let i = 0; i < n; i++) {
  const [w, h] = input[i].split(" ").map(Number);

  const ppi = Math.sqrt(w ** 2 + h ** 2) / 77;

  arr.push([ppi, i + 1]);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) return b[0] - a[0];
  18110;
  return a[1] - b[1];
});

console.log(arr.map((value) => value[1]).join("\n"));

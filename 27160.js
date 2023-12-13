const fs = require("fs");
const input = fs
  .readFileSync("./input/27160.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();

input.map((value) => {
  const fruit = value.split(" ")[0];
  const count = Number(value.split(" ")[1]);

  map.set(fruit, map.get(fruit) + count || count);
});

console.log(Array.from(map.values()).includes(5) ? "YES" : "NO");

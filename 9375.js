const fs = require("fs");
const input = fs
  .readFileSync("./input/9375.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  let result = 1;
  const n = input.shift();
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const [name, type] = input.shift().split(" ");
    map.set(type, (map.get(type) || 0) + 1);
  }

  for (const n of map.values()) {
    result *= n + 1;
  }

  console.log(result - 1);
}

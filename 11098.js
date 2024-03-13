const fs = require("fs");
const input = fs
  .readFileSync("./input/11098.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const n = input.shift();
  const map = new Map();
  for (let j = 0; j < n; j++) {
    const [price, name] = input.shift().split(" ");
    map.set(+price, name);
  }
  const max = Math.max(...[...map].map((value) => +value[0]));
  console.log(map.get(max));
}

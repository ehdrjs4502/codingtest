const fs = require("fs");
const input = fs
  .readFileSync("./input/24431.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = +input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  let count = 0;
  const map = new Map();
  const [n, l, f] = input.shift().split(" ");
  const arr = input.shift().split(" ");
  arr.forEach((value) => {
    const str = value.slice(-f);
    map.set(str, (map.get(str) || 0) + 1);
  });

  map.forEach((value, _) => {
    if (value >= 2) {
      count += Math.floor(value / 2);
    }
  });

  result.push(count);
}

console.log(result.join("\n"));

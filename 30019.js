const fs = require("fs");
const input = fs
  .readFileSync("./input/30019.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const result = [];
const map = new Map();

for (let i = 0; i < m; i++) {
  let [num, start, end] = input[i].split(" ").map(Number);
  if (!map.has(num)) {
    map.set(num, end);
    result.push("YES");
  } else {
    if (map.get(num) > start) {
      result.push("NO");
    } else {
      map.set(num, end);
      result.push("YES");
    }
  }
}

console.log(result.join("\n"));

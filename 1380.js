const fs = require("fs");
const input = fs
  .readFileSync("./input/1380.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let i = 1;
const result = [];

while (true) {
  const n = input.shift();
  if (n == 0) break;
  const girls = [];
  const map = new Map();

  for (let i = 0; i < n; i++) {
    girls.push(input.shift());
  }

  for (let j = 0; j < 2 * n - 1; j++) {
    const [n, _] = input.shift().split(" ");
    map.set(n, map.get(n) + 1 || 1);
  }

  [...map]
    .filter((value) => value[1] !== 2)
    .forEach((value) => {
      result.push(`${i} ${girls[value[0] - 1]}`);
    });

  i++;
}

console.log(result.join("\n"));

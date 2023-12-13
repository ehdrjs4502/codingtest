const fs = require("fs");
const input = fs
  .readFileSync("./input/3711.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v.trim()));

const n = input.shift();

for (let i = 0; i < n; i++) {
  const g = input.shift();
  const set = new Set();
  const arr = [];
  let m = 1;
  for (let j = 0; j < g; j++) {
    arr.push(input.shift());
  }
  while (true) {
    arr.map((value) => {
      set.add(value % m);
    });

    if (g == set.size) break;
    else {
      set.clear();
      m++;
    }
  }
  console.log(m);
}

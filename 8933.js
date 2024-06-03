const fs = require("fs");
const input = fs
  .readFileSync("./input/8933.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = +input.shift();
const result = [];
const obj = {
  A: 1,
  G: 600,
  C: 600 * 600,
  T: 600 * 600 * 600,
};
for (let i = 0; i < t; i++) {
  const map = new Map();
  let [k, str] = input.shift().split(" ");
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += obj[str[i]];
  }

  map.set(sum, 1);
  map.forEach((value) => {
    if (value > max) {
      max = value;
    }
  });

  for (let i = 1; i < str.length - k + 1; i++) {
    sum = sum - obj[str[i - 1]] + obj[str[i + +k - 1]];
    map.set(sum, map.get(sum) + 1 || 1);
  }

  map.forEach((value) => {
    if (value > max) {
      max = value;
    }
  });
  result.push(max);
}

console.log(result.join("\n"));

const fs = require("fs");
const input = fs
  .readFileSync("./input/29721.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, k] = input.shift().split(" ").map(Number);
const map = new Map();
const spawn = input.map((vaule) => {
  return vaule.split(" ").join("");
});

let count = 0;

for (let i = 0; i < k; i++) {
  //x,y
  const [x, y] = input[i].split(" ");
  if (Number(x) - 2 >= 1) {
    map.set(Number(x) - 2 + String(y), 1);
  }
  if (Number(x) + 2 <= n) {
    map.set(Number(x) + 2 + String(y), 1);
  }
  if (Number(y) - 2 >= 1) {
    map.set(String(x) + (Number(y) - 2), 1);
  }
  if (Number(y) + 2 <= n) {
    map.set(String(x) + (Number(y) + 2), 1);
  }
}

spawn.map((value) => {
  map.has(value) && count++;
});

console.log(map.size - count);

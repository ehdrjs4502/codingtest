const fs = require("fs");
const input = fs.readFileSync("./input/21921.txt").toString().trim().split("\n");

const [n, x] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const map = new Map();
let sum = 0;
let max = 0;
for (let i = 0; i < x; i++) {
  sum += arr[i];
}

max = sum;
map.set(sum, 1);

for (let i = 1; i < n - x + 1; i++) {
  sum = sum - arr[i - 1] + arr[i + x - 1];
  max = Math.max(max, sum);
  map.set(sum, map.get(sum) + 1 || 1);
}

if (max === 0) {
  return console.log("SAD");
}

console.log(max);
console.log(map.get(max));

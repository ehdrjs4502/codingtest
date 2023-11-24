const fs = require("fs");
const input = fs.readFileSync("./input/2501.txt").toString().trim();

const [n, k] = input.split(" ").map(Number);

const arr = [];

for (let i = 1; i <= n; i++) {
  n % i === 0 && arr.push(i);
}

console.log(arr[k - 1] ?? 0);

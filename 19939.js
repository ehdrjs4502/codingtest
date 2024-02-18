const fs = require("fs");
const input = fs.readFileSync("./input/19939.txt").toString().trim();

const [n, k] = input.split(" ").map(Number);
let sum = 0;

for (let i = 1; i <= k; i += 1) {
  sum += i;
}

if (sum > n) {
  return console.log(-1);
}

n -= sum;

if (n % k === 0) {
  result = k - 1;
} else {
  result = k;
}

console.log(result);

const fs = require("fs");
const input = fs
  .readFileSync("./input/2581.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function isPrime(number) {
  if (number === 2) {
    return true;
  }

  if (number <= 1 || number % 2 === 0) {
    return false;
  }

  const sqrtNum = Math.sqrt(number);

  for (let i = 3; i <= sqrtNum; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const n = +input.shift();
const m = +input.shift();
const arr = [];
let sum = 0;
for (let i = n; i <= m; i++) {
  if (isPrime(i)) {
    sum += i;
    arr.push(i);
  }
}

if (arr.length === 0) return console.log(-1);

console.log(sum + "\n" + Math.min(...arr));

const fs = require("fs");
const input = fs
  .readFileSync("./input/1978.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

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

let result = 0;

const arr = input.shift().split(" ").map(Number);

arr.map((value) => {
  if (isPrime(value)) result++;
});

console.log(result);

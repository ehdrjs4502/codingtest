const fs = require("fs");
const input = fs
  .readFileSync("./input/11050.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const factorial = (num) => {
  let n = 1;
  for (let i = n; i <= num; i++) {
    n *= i;
  }
  return n;
};

const [N, K] = input.shift().split(" ").map(Number);
let n = factorial(N);
let k = factorial(K);
let n_k = factorial(N - K);

console.log(n / (n_k * k));

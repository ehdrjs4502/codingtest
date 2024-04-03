const fs = require("fs");
const input = fs.readFileSync("./input/10870.txt").toString().trim();

function fibo(num) {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(+input));

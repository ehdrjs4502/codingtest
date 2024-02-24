const fs = require("fs");
const input = fs.readFileSync("./input/27434.txt").toString().trim();

const factorial = (num) => {
  let result = 1n;
  for (let i = 2n; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(BigInt(input)).toString());

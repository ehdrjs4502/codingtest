const fs = require("fs");
const input = fs.readFileSync("./input/3036.txt").toString().trim().split("\n");

const gcd = (p, q) => {
  if (q == 0) return p;
  return gcd(q, p % q);
};

input.shift();
const numArr = input.shift().split(" ").map(Number);
const a = numArr.shift();
const result = [];

numArr.forEach((value) => {
  const gcdNum = gcd(a, value);
  result.push(`${a / gcdNum}/${parseInt(value / gcdNum)}`);
});

console.log(result.join("\n"));

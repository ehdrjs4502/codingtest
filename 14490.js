const fs = require("fs");
const input = fs.readFileSync("./input/14490.txt").toString().trim();

const [n, m] = input.split(":");

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

let num = n > m ? gcd(n, m) : gcd(m, n);

console.log(`${n / num}:${m / num}`);

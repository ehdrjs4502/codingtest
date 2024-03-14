const fs = require("fs");
const input = fs.readFileSync("./input/2355.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);

let result = 0;

if (n > m) {
  result = ((n - m + 1) * (n + m)) / 2;
} else {
  result = ((m - n + 1) * (n + m)) / 2;
}

console.log(result);

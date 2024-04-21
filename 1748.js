const fs = require("fs");
const input = fs.readFileSync("./input/1748.txt").toString().trim();
result = 0;
for (let i = 1; i <= input; i *= 10) {
  result += input - i + 1;
}

console.log(result);

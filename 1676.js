const fs = require("fs");
const input = fs.readFileSync("./input/1676.txt").toString().trim();

const num = +input;
let result = 0;

for (let i = 5; i <= num; i *= 5) {
  result += parseInt(num / i);
}

console.log(result);

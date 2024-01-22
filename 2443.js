const fs = require("fs");
const input = fs.readFileSync("./input/2443.txt").toString().trim();

const result = [];

for (let i = input; i >= 1; i--) {
  let space = " ".repeat(input - i);
  let star = "*".repeat(i * 2 - 1);
  result.push(space + star);
}

console.log(result.join("\n"));

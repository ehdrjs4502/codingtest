const fs = require("fs");
const input = fs.readFileSync("./input/2741.txt").toString().trim();

const result = [];
for (let i = 1; i <= input; i++) {
  result.push(i);
}

console.log(result.join("\n"));

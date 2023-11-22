const fs = require("fs");
const input = fs.readFileSync("./input/2439.txt").toString().trim();

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}

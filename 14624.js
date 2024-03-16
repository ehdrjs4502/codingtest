const fs = require("fs");
const input = fs.readFileSync("./input/14624.txt").toString().trim();

if (input % 2 === 0) return console.log("I LOVE CBNU");

console.log("*".repeat(input));
console.log(" ".repeat(input / 2) + "*");
for (let i = 0; i < Math.floor(input / 2); i++) {
  console.log(" ".repeat(input / 2 - i - 1) + "*" + " ".repeat(i * 2 + 1) + "*");
}

const fs = require("fs");
const input = fs.readFileSync("./input/2523.txt").toString().trim();

for (let i = 0; i < input; i++) {
  console.log("*".repeat(i + 1));
}

for (let i = input; i > 0; i--) {
  console.log("*".repeat(i - 1));
}

const fs = require("fs");
const input = fs.readFileSync("./input/19564.txt").toString().trim();

let result = 1;

for (let i = 0; i < input.length; i++) {
  if (input.charCodeAt(i) >= input.charCodeAt(i + 1)) {
    result++;
  }
}

console.log(result);

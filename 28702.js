const fs = require("fs");
const input = fs
  .readFileSync("./input/28702.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

for (let i = 0; i < input.length; i++) {
  if (!isNaN(input[i])) {
    let next = Number(input[i]) + 3 - i;
    if (next % 3 === 0 && next % 5 === 0) return console.log("FizzBuzz");
    if (next % 3 === 0) return console.log("Fizz");
    if (next % 5 === 0) return console.log("Buzz");
    return console.log(next);
  }
}

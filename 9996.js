const fs = require("fs");
const input = fs
  .readFileSync("./input/9996.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const [patternA, patternB] = input.shift().split("*");
const result = [];

input.forEach((value) => {
  const front = value.substring(0, patternA.length);
  const back = value.substring(value.length - patternB.length);
  if (value.length < patternA.length + patternB.length) {
    result.push("NE");
  } else if (front === patternA && back === patternB) {
    result.push("DA");
  } else {
    result.push("NE");
  }
});

console.log(result.join("\n"));

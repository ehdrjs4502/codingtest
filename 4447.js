const fs = require("fs");
const input = fs
  .readFileSync("./input/4447.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const result = [];

input.forEach((value) => {
  const g = value.match(/g/gi)?.length || 0;
  const b = value.match(/b/gi)?.length || 0;

  if (g === b) {
    return result.push(`${value} is NEUTRAL`);
  }

  result.push(`${value} is ${g > b ? "GOOD" : "A BADDY"}`);
});

console.log(result.join("\n"));

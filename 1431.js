const fs = require("fs");
const input = fs
  .readFileSync("./input/1431.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function getNumSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(parseInt(char))) {
      sum += parseInt(char);
    }
  }
  return sum;
}

input.shift();

const result = input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  const sumA = getNumSum(a);
  const sumB = getNumSum(b);
  if (sumA !== sumB) {
    return sumA - sumB;
  }
  return a.localeCompare(b);
});

console.log(result.join("\n"));

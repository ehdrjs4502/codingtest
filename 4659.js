const fs = require("fs");
const input = fs
  .readFileSync("./input/4659.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const isGoodPW = (pw) => {
  if (!/[aeiou]/.test(pw)) {
    return false;
  }

  if (/([aeiou]{3})|([^aeiou]{3})/.test(pw)) {
    return false;
  }

  if (/([^eo])\1/.test(pw)) {
    return false;
  }

  return true;
};

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  result.push(isGoodPW(input[i]) ? `<${input[i]}> is acceptable.` : `<${input[i]}> is not acceptable.`);
}

console.log(result.join("\n"));

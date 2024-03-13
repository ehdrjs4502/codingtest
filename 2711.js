const fs = require("fs");
const input = fs
  .readFileSync("./input/2711.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const result = [];

input.map((value) => {
  const [idx, str] = value.split(" ");
  let newStr = "";

  for (let i in str) {
    if (i != idx - 1) {
      newStr += str[i];
    }
  }

  result.push(newStr);
});

console.log(result.join("\n"));

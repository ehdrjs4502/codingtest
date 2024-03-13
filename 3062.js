const fs = require("fs");
const input = fs
  .readFileSync("./input/3062.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  let reverse = +input[i].split("").reverse().join("");
  let sum = reverse + Number(input[i]);
  if (sum == String(sum).split("").reverse().join("")) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}
console.log(result.join("\n"));

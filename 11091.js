const fs = require("fs");
const input = fs
  .readFileSync("./input/11091.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  input[i].split("").map((str) => {
    alpha = alpha.replace(str.toLowerCase(), "");
  });

  console.log(alpha ? `missing ${alpha}` : "pangram");
}

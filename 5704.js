const fs = require("fs");
const input = fs
  .readFileSync("./input/5704.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

input.map((value) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  value.split("").map((str) => {
    alpha = alpha.replace(str.toLowerCase(), "");
  });

  console.log(alpha ? "N" : "Y");
});

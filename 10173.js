const fs = require("fs");
const input = fs
  .readFileSync("./input/10173.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();
const reg = /nemo/i;

input.map((value) => {
  console.log(reg.test(value) ? "Found" : "Missing");
});

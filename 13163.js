const fs = require("fs");
const input = fs
  .readFileSync("./input/13163.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const result = [];
input.map((value) => {
  let arr = value.split(" ");
  arr[0] = "god";
  result.push(arr.join(""));
});

console.log(result.join("\n"));

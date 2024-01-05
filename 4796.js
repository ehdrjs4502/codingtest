const fs = require("fs");
const input = fs
  .readFileSync("./input/4796.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

const result = [];

input.map((value, idx) => {
  const [l, p, v] = value.split(" ").map(Number);
  let day = v % p > l ? l : v % p;
  result.push(`Case ${idx + 1}: ${Math.floor(v / p) * l + day}`);
});

console.log(result.join("\n"));

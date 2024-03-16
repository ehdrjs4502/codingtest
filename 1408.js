const fs = require("fs");
const input = fs
  .readFileSync("./input/1408.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [h, m, s] = input[0].split(":").map(Number);
let [sh, sm, ss] = input[1].split(":").map(Number);
let [rh, rm, rs] = [];

if (ss >= s) {
  rs = ss - s;
} else {
  rs = 60 + ss - s;
  sm -= 1;
}

if (sm >= m) {
  rm = sm - m;
} else {
  rm = 60 + sm - m;
  sh -= 1;
}

if (sh >= h) {
  rh = sh - h;
} else {
  rh = 24 + sh - h;
}

console.log([rh, rm, rs].map((el) => ("0" + el).slice(-2)).join(":"));

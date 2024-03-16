const fs = require("fs");
const input = fs
  .readFileSync("./input/7600.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const reg = /[a-z]/;
input.pop();

input.map((value) => {
  const set = new Set();
  value.split("").map((str) => {
    if (reg.test(str.toLowerCase())) {
      set.add(str.toLowerCase());
    }
  });
  console.log(set.size);
});

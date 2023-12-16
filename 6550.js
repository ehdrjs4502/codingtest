const fs = require("fs");
const input = fs
  .readFileSync("./input/6550.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.map((value) => {
  const s = value.split(" ")[0].split("");
  const t = value.split(" ")[1];
  for (word of t) {
    if (word === s[0]) {
      s.shift();
    }
  }
  console.log(s.length === 0 ? "Yes" : "No");
});

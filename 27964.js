const fs = require("fs");
const input = fs.readFileSync("./input/27964.txt").toString().trim().split("\n");

input.shift();

const set = new Set();

input[0].split(" ").map((value) => {
  if (value.indexOf("Cheese", value.length - 6) !== -1) {
    set.add(value);
  }
});

console.log(set.size >= 4 ? "yummy" : "sad");

const fs = require("fs");
const input = fs.readFileSync("./input/16499.txt").toString().trim().split("\n");

input.shift();

const map = new Map();

input.map((value) => {
  const word = value.split("").sort().join("");
  map.set(word, 1);
});

console.log(map.size);

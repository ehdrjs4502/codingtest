const fs = require("fs");
const input = fs.readFileSync("./input/13414.txt").toString().trim().split("\n");

const [k, l] = input.shift().split(" ");

const map = new Map();

const result = [];
let count = 0;

input.map((value) => {
  if (map.has(value)) {
    map.delete(value);
    map.set(value, 1);
  } else {
    map.set(value, 1);
  }
});

map.forEach((value, key) => {
  if (count < k) {
    result.push(key);
    count++;
  }
});

console.log(result.join("\n"));

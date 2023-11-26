const fs = require("fs");
const input = fs.readFileSync("./input/1302.txt").toString().trim().split("\n");

const n = input.shift();

const map = new Map();

let max = 1;

input.map((item) => {
  if (map.has(item)) {
    let count = map.get(item);
    count++;
    if (max < count) {
      max = count;
    }
    map.set(item, count);
  } else {
    map.set(item, 1);
  }
});

const mapToArray = [...map];

const result = [];

mapToArray.map((value) => {
  value[1] === max && result.push(value[0]);
});

console.log(result.sort((a, b) => a.localeCompare(b))[0]);

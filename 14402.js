const fs = require("fs");
const input = fs
  .readFileSync("./input/14402.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

const map = new Map();
let count = 0;

input.map((value) => {
  const [name, type] = value.split(" ");
  if (type === "-") {
    if (!map.has(name) || map.get(name) == 0) {
      count++;
    } else {
      map.set(name, map.get(name) - 1);
    }
  } else {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }
});

if (map.size == 0) {
  console.log(count);
} else {
  const result =
    Array.from(map.values()).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) + count;
  console.log(result);
}

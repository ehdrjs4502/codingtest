const fs = require("fs");
const input = fs.readFileSync("./input/28446.txt").toString().trim().split("\n");

input.shift();

const lockerMap = new Map();
const result = [];

input.map((value) => {
  const [n, x, w] = value.split(" ");
  if (n == 1) {
    lockerMap.set(w, x);
  } else if (n == 2) {
    result.push(lockerMap.get(x));
  }
});

console.log(result.join("\n"));

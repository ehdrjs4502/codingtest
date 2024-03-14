const fs = require("fs");
const input = fs.readFileSync("./input/2292.txt").toString().trim();

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);

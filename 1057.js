const fs = require("fs");
const input = fs.readFileSync("./input/1057.txt").toString().trim();

let [n, kim, lim] = input.split(" ");
let result = 0;

while (kim !== lim) {
  kim -= parseInt(kim / 2);
  lim -= parseInt(lim / 2);
  result++;
}

console.log(result);

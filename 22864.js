const fs = require("fs");
let input = fs.readFileSync("./input/22864.txt").toString().trim();

let [a, b, c, m] = input.split(" ").map(Number);
let p = 0;
let result = 0;

for (let i = 0; i < 24; i++) {
  if (p + a <= m) {
    p = p + a;
    result += b;
  } else {
    if (p - c >= 0) p = p - c;
    else p = 0;
  }
}

console.log(result);

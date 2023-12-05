const fs = require("fs");
const input = fs.readFileSync("./input/10039.txt").toString().trim().split("\n");

let result = 0;

input.map((value) => {
  if (value < 40) {
    result += 40;
  } else {
    result += Number(value);
  }
});

console.log(result / input.length);

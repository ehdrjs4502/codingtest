const fs = require("fs");
const input = fs.readFileSync("./input/5597.txt").toString().trim().split("\n");

arr = input.map((item) => Number(item)).sort((a, b) => a - b);

for (let i = 1; i <= 30; i++) {
  if (arr.indexOf(i) === -1) {
    console.log(i);
  }
}

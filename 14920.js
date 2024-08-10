const fs = require("fs");
const input = fs.readFileSync("./input/14920.txt").toString().trim();

let num = +input;
let result = 1;

while (num !== 1) {
  if (num % 2 === 0) {
    num = num / 2;
  } else {
    num = 3 * num + 1;
  }

  result++;
}
console.log(result);

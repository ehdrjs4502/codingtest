const fs = require("fs");
const input = fs.readFileSync("./input/22351.txt").toString().trim();

const length = input.length;
const arr = [parseInt(input[0]), parseInt(input.slice(0, 2)), parseInt(input.slice(0, 3))];

for (let a of arr) {
  let b = a;
  let num = "";

  while (num.length < length) {
    num += b.toString();
    if (num === input) {
      return console.log(a, b);
    }

    b += 1;
  }
}

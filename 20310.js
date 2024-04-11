const fs = require("fs");
let input = fs.readFileSync("./input/20310.txt").toString().trim().split("");

const zero = Math.floor(input.filter((num) => num == 0).length / 2);
const one = Math.floor(input.filter((num) => num == 1).length / 2);

for (let i = 0; i < zero; i++) {
  let idx = input.slice().reverse().indexOf("0");
  input.splice(input.length - 1 - idx, 1);
}

for (let i = 0; i < one; i++) {
  let idx = input.indexOf("1");
  input.splice(idx, 1);
}

console.log(input.join(""));

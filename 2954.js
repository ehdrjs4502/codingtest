const fs = require("fs");
const input = fs.readFileSync("./input/2954.txt").toString().trim().split("");

const reg = /[aeiou]/;
let result = "";

for (let i = 0; i < input.length; i++) {
  if (reg.test(input[i])) {
    result += input[i];
    i += 2;
  } else {
    result += input[i];
  }
}

console.log(result);

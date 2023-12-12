const fs = require("fs");
const input = fs.readFileSync("./input/1251.txt").toString().trim();

const result = [];

for (let i = 1; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const a = input.substring(0, i).split("").reverse().join("");
    const b = input.substring(i, j).split("").reverse().join("");
    const c = input.substring(j).split("").reverse().join("");
    result.push(a + b + c);
  }
}

console.log(result.sort()[0]);

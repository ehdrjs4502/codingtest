const fs = require("fs");
let input = fs.readFileSync("./input/5585.txt").toString().trim();

const change = [500, 100, 50, 10, 5, 1];
let cash = 1000 - input;
let result = 0;

change.forEach((value) => {
  result += Math.floor(cash / value);
  cash = cash % value;
});

console.log(result);

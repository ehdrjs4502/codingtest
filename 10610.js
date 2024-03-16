//https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%88%98_%ED%8C%90%EC%A0%95%EB%B2%95 배수 판정법
const fs = require("fs");
const input = fs.readFileSync("./input/10610.txt").toString().trim();

if (!input.includes("0")) return console.log(-1);

let sum = input
  .split("")
  .map(Number)
  .reduce((a, b) => a + b);

if (sum % 3 !== 0) return console.log(-1);

console.log(
  input
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);

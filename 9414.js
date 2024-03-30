const fs = require("fs");
const input = fs
  .readFileSync("./input/9414.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  const arr = [];
  let year = 1;
  let price = 0;
  const useMoney = 5 * 10 ** 6;
  while (input[0] != 0) {
    const num = +input.shift();
    arr.push(num);
  }
  input.shift();
  arr.sort((a, b) => b - a);
  arr.forEach((value) => {
    price += 2 * value ** year;
    year++;
  });

  result.push(price <= useMoney ? price : "Too expensive");
}

console.log(result.join("\n"));

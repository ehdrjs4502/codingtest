const fs = require("fs");
let input = fs
  .readFileSync("./input/15720.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Math.min(...input.shift().split(" ").map(Number));
let basicPrice = 0;
let discountPrice = 0;

input.map((value) => {
  value.split(" ").map((price) => {
    basicPrice += Number(price);
  });
});

let burger = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let side = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let drink = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  discountPrice += burger[i] * 0.9;
  discountPrice += side[i] * 0.9;
  discountPrice += drink[i] * 0.9;
}

for (let i = n; i < burger.length; i++) {
  discountPrice += burger[i];
}

for (let i = n; i < side.length; i++) {
  discountPrice += side[i];
}

for (let i = n; i < drink.length; i++) {
  discountPrice += drink[i];
}

console.log(basicPrice);
console.log(discountPrice);

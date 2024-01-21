const fs = require("fs");
const input = fs
  .readFileSync("./input/2720.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

//쿼터(Quarter, $0.25), 다임(Dime, $0.10), 니켈(Nickel, $0.05), 페니(Penny, $0.01)

const t = input.shift();

for (let i = 0; i < t; i++) {
  const arr = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];
  let num = input[i];
  for (let j = 0; j < coins.length; j++) {
    arr[j] = Math.floor(num / coins[j]);
    num %= coins[j];
  }
  console.log(arr.join(" "));
}

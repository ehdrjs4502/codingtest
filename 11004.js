const fs = require("fs");
const input = fs.readFileSync("./input/11004.txt").toString().trim().split("\n");
const idx = input[0].split(" ")[1];

let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});

console.log(arr[idx - 1]);

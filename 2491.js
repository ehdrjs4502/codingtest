const fs = require("fs");
const input = fs.readFileSync("./input/2491.txt").toString().trim().split("\n");

let num = input.shift();
let upCount = 1;
let downCount = 1;
let arr = input.shift().split(" ").map(Number);
let upResult = 1;
let downResult = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= arr[i + 1]) {
    upCount++;
    upResult = Math.max(upResult, upCount);
  } else {
    upCount = 1;
  }

  if (arr[i] >= arr[i + 1]) {
    downCount++;
    downResult = Math.max(downResult, downCount);
  } else {
    downCount = 1;
  }
}

upResult > downResult ? console.log(upResult) : console.log(downResult);

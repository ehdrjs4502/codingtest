const fs = require("fs");
const input = fs
  .readFileSync("./input/11536.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

function checkOrder(arr) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      increasing = false;
      break;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      decreasing = false;
      break;
    }
  }

  if (increasing) {
    console.log("INCREASING");
  } else if (decreasing) {
    console.log("DECREASING");
  } else {
    console.log("NEITHER");
  }
}

checkOrder(input);

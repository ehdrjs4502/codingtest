const fs = require("fs");
const input = fs
  .readFileSync("./input/28062.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

let result = 0;
const oddArr = [];

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

input[0].split(" ").map((value) => {
  if (value % 2 == 1) {
    oddArr.push(+value);
  } else {
    result += +value;
  }
});

if (oddArr.length % 2 == 1) {
  const sortOddArr = oddArr.sort();
  sortOddArr.shift();

  result += sum(sortOddArr);
} else {
  result += sum(oddArr);
}

console.log(result % 2 == 0 ? result : 0);

const fs = require("fs");
let input = fs
  .readFileSync("./input/23057.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const set = new Set();
const numArr = input[0].split(" ").map(Number);

const sum = numArr.reduce((a, b) => {
  return a + b;
});

function combinations(arr) {
  const result = [];

  function recursiveCombination(current, start) {
    if (current.length > 0) {
      set.add(
        [...current].reduce((a, b) => {
          return a + b;
        })
      );
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      recursiveCombination(current, i + 1);
      current.pop();
    }
  }

  recursiveCombination([], 0);
  return result;
}

combinations(numArr);

console.log(sum - set.size);

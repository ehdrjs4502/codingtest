const fs = require("fs");
const input = fs
  .readFileSync("./input/1652.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const solution = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ".") {
        count++;
      } else {
        count = 0;
      }
      if (count === 2) {
        result++;
      }
    }
  }

  return result;
};

input.shift();
const horizontal = input;
const vertical = input.map((_, i) => input.map((row) => row[i]).join(""));
console.log(solution(horizontal), solution(vertical));

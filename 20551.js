const fs = require("fs");
const input = fs
  .readFileSync("./input/20551.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const lowerBound = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return arr[left] === target ? left : -1;
};

const [n, m] = input.shift().split(" ").map(Number);
let arr = [];
let result = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(input[i]));
}

arr = arr.sort((a, b) => a - b);

for (let i = 0; i < m; i++) {
  result.push(lowerBound(arr, Number(input[i + n])));
}

console.log(result.join("\n"));

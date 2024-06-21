const fs = require("fs");
const input = fs
  .readFileSync("./input/19637.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ");
const powerArr = [];
const titleArr = [];
const result = [];
for (let i = 0; i < n; i++) {
  const [title, power] = input[i].split(" ");
  titleArr.push(title);
  powerArr.push(+power);
}

for (let i = n; i < input.length; i++) {
  let target = input[i];
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (powerArr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  result.push(titleArr[start]);
}

console.log(result.join("\n"));

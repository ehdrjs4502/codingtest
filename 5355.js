const fs = require("fs");
const input = fs
  .readFileSync("./input/5355.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];
for (let i = 0; i < t; i++) {
  const arr = input[i].split(" ");
  let num = Number(arr[0]);

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === "@") {
      num *= 3;
    } else if (arr[j] === "%") {
      num += 5;
    } else if (arr[j] === "#") {
      num -= 7;
    }
  }

  result.push(num.toFixed(2));
}

console.log(result.join("\n"));

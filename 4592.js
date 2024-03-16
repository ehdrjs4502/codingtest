const fs = require("fs");
const input = fs
  .readFileSync("./input/4592.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ");
  const result = [];
  for (let j = 1; j < arr.length; j++) {
    if (result.length === 0) result.push(arr[j]);

    if (result[result.length - 1] !== arr[j]) result.push(arr[j]);
  }

  console.log(result.join(" ") + " $");
}

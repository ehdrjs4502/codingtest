const fs = require("fs");
const input = fs
  .readFileSync("./input/4889.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();
const result = [];
input.forEach((value, idx) => {
  const arr = value.split("");
  const stack = [];
  let count = 0;
  arr.forEach((str) => {
    if (str == "{") {
      stack.push(str);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        stack.push("{");
        count++;
      }
    }
  });
  count += Math.ceil(stack.length / 2);
  result.push(`${idx + 1}. ${count}`);
});

console.log(result.join("\n"));

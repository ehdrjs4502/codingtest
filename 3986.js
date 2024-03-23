const fs = require("fs");
const input = fs
  .readFileSync("./input/3986.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
let result = 0;

for (let i = 0; i < t; i++) {
  const arr = input.shift().split("");
  const stack = [];

  arr.forEach((value) => {
    stack.push(value);

    if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  });

  stack.length === 0 && result++;
}

console.log(result);

const fs = require("fs");
const input = fs.readFileSync("./input/11899.txt").toString().trim();

const stack = [];

for (value of input) {
  stack.push(value);

  if (stack[stack?.length - 2] == "(" && stack[stack?.length - 1] == ")") {
    stack.pop();
    stack.pop();
  }
}

console.log(stack.length);

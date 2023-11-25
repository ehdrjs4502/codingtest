const fs = require("fs");
const input = fs.readFileSync("./input/28278.txt").toString().trim().split("\n");

input.shift();

const stack = [];
let result = "";

input.map((item) => {
  if (item[0] == 1) {
    stack.push(Number(item.split(" ")[1]));
  }

  if (item[0] == 2) {
    result += (stack.pop() || -1) + "\n";
  }

  if (item[0] == 3) {
    result += stack.length + "\n";
  }

  if (item[0] == 4) {
    result += (stack.length ? 0 : 1) + "\n";
  }

  if (item[0] == 5) {
    result += (stack[stack.length - 1] ?? -1) + "\n";
  }
});

console.log(result);

const fs = require("fs");
const input = fs.readFileSync("./input/1874.txt").toString().trim().split("\n").map(Number);

const n = input[0];
let index = 1;
const stack = [];
const reuslt = [];
let num = 1;

while (true) {
  if (n * 2 < num || index > n) break;
  if (stack.length !== 0 && stack.at(-1) === input[index]) {
    stack.pop();
    reuslt.push("-");
    index++;
  } else {
    stack.push(num);
    reuslt.push("+");
    num++;
  }
}

console.log(index > n ? reuslt.join("\n") : "NO");

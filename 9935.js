const fs = require("fs");
const input = fs.readFileSync("./input/9935.txt").toString().trim().split("\n");

let str = input.shift();
let bomb = input.shift();
const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (str[i] === bomb[bomb.length - 1]) {
    if (stack.slice(-bomb.length).join("") === bomb) {
      stack.splice(-bomb.length);
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");

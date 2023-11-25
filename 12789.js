const fs = require("fs");
const input = fs.readFileSync("./input/12789.txt").toString().trim().split("\n");

input.shift();

let order = 1;

const arr = input[0].split(" ");
const stack = [];

while (true) {
  if (arr.length === 0) {
    break;
  }

  // order랑 같으면 본인 순서 맞으니 빼주고 order++ 아니면 스택에다가 넣어놓기
  if (arr[0] == order) {
    arr.shift();
    order++;
  } else {
    stack.push(arr.shift());
  }

  while (true) {
    if (stack.length === 0) {
      break;
    }
    // 스택 마지막이 order랑 같으면 빼주고 order++
    if (stack[stack.length - 1] == order) {
      stack.pop();
      order++;
    } else {
      break;
    }
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");

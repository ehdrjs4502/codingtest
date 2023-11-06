const fs = require("fs");
const input = fs.readFileSync("./input/10866.txt").toString().trim().split("\n");

const num = input.shift();
let deque = [];
let result = [];

for (let i = 0; i < num; i++) {
    const [command, num] = input[i].split(" ");
    switch (command) {
        case "push_back":
            deque.push(num);
            break;
        case "push_front":
            deque.unshift(num);
            break;
        case "pop_front":
            if (deque.length > 0) {
                result.push(deque.shift());
            } else {
                result.push(-1);
            }
            break;
        case "pop_back":
            if (deque.length > 0) {
                result.push(deque.pop());
            } else {
                result.push(-1);
            }
            break;
        case "size":
            result.push(deque.length);
            break;
        case "empty":
            if (deque.length > 0) {
                result.push(0);
            } else {
                result.push(1);
            }
            break;
        case "front":
            if (deque.length > 0) {
                result.push(deque[0]);
            } else {
                result.push(-1);
            }
            break;
        case "back":
            if (deque.length > 0) {
                result.push(deque[deque.length - 1]);
            } else {
                result.push(-1);
            }
    }
}

console.log(result.join("\n"));

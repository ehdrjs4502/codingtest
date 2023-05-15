const fs = require('fs');
const input = fs.readFileSync("./input/10773.txt").toString().trim().split("\n");

let stack = []

for(let i = 1; i < input.length; i++) {
    if(input[i] == '0' || input[i] == '0\r') {
        stack.pop()
    } else {
        stack.push(Number(input[i]))
    }
}

console.log(stack.length == 0 ? 0 : stack.reduce((a,b) => {
    return a + b
}))
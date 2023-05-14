const fs = require('fs');
const input = fs.readFileSync("./input/10799.txt").toString().trim()

let stack = []
let answer = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] == '(') {
        stack.push('(')
    } else if(input[i] == ')') {
        stack.pop()
    }

    if(i > 0 && input[i - 1] == '(' && input[i] == ')') {
        answer += stack.length
    } else if(i > 0 && input[i - 1] != '(' && input[i] == ')') {
        answer++
    }
}

console.log(answer)
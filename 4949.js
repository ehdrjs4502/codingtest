const fs = require('fs');
const input = fs.readFileSync("./input/4949.txt").toString().trim().split("\n");

for(let i = 0; i < input.length - 1; i++) {
    let stack = [];
    for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] == '(' || input[i][j] == '[') {
            stack.push(input[i][j]);
        } else if(input[i][j] == ')') {
            if(stack[stack.length - 1] == '(') {
                stack.pop();
            } else {
                stack.push(')')
            }
        } else if(input[i][j] == ']') {
            if(stack[stack.length - 1] == '[') {
                stack.pop();
            } else {
                stack.push(']')
            }
        } 
    }
    
    console.log(stack.length == 0 ? "yes" : "no");
}
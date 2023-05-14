const fs = require('fs');
const input = fs.readFileSync("./input/9012.txt").toString().trim().split("\n");

function solution(s){
    let stack = []
  
    if(s[0] === ")") return "NO"
  
    for(let i = 0; i < s.length; i++) {
      if(stack.length === 0 || stack[stack.length - 1] === s[i]) {
        stack.push(s[i])
      } else {
        stack.pop()
      }
  
      if(stack[0] === ")") return "NO"
    }
  
    return stack.length === 0 ? "YES" : "NO";
  
  }

for(let i = 1; i < input.length; i++) {
    console.log(solution(input[i]))
}
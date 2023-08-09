const fs = require('fs');
const input = fs.readFileSync("./input/10845.txt").toString().trim().split("\n");

let queue = []
let answer = []

for(let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ')
    if(a == 'push') {
        queue.push(b)
    } else if(a == 'front') {
        queue[0] === undefined ? answer.push(-1) : answer.push(queue[0])
    } else if(a == 'back') {
        queue[queue.length - 1] === undefined ? answer.push(-1) : answer.push(queue[queue.length -1])  
    } else if(a == 'empty') {
        queue.length == 0 ? answer.push(1) : answer.push(0)
    }  else if(a == 'pop') {
        queue.length === 0 ? answer.push(-1) : answer.push(queue.shift())
    } else if(a == 'size') {
        answer.push(queue.length)
    }
}

console.log(answer.join('\n'));
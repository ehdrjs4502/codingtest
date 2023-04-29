// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require('fs');
const input = fs.readFileSync("./input/10828.txt").toString().trim().split("\n");

function solution(input) {
    const count = input[0];
    let stack = [];
    let answer = [];
    for(let i = 1; i <= count; i++) {
        if(input[i].split(' ')[0] == 'push') {
            stack.push(input[i].split(' ')[1]);
        }

        else if(input[i] == 'top' || input[i] == 'top\r') {
            answer.push(stack.length == 0 ? -1 : stack[stack.length - 1]);
        }

        else if(input[i] == 'size' || input[i] == 'size\r') {
            answer.push(stack.length);
        }

        else if(input[i] == 'pop' || input[i] == 'pop\r') {
            answer.push(stack.length == 0 ? -1 : stack.pop());
        }

        else if(input[i] == 'empty' || input[i] == 'empty\r') {
            answer.push(stack.length == 0 ? 1 : 0);
        }

    }
    
    console.log(answer.join('\n'))
}

solution(input);



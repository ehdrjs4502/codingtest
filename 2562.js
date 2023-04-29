// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const input = fs.readFileSync("./input/2562.txt").toString().trim().split("\n");

function solution(input) {
    arr = input.map((x) => Number(x));
    const max = Math.max(...arr);
    console.log(max);
    console.log(arr.indexOf(max) + 1);

}

solution(input);
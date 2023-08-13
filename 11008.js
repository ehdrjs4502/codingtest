const fs = require('fs');
const input = fs.readFileSync("./input/11008.txt").toString().trim().split("\n");
const n = input.shift()

let result = []

//p를 1로 바꾼 후 길이를 result 배열에 저장
for(let i = 0; i < n; i++) {
    const[s,p] = input[i].split(' ')
    result.push(s.replaceAll(p,'1').length)
}


// 출력
console.log(result.join('\n'))
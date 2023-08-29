const fs = require('fs');
const input = fs.readFileSync("./input/3052.txt").toString().trim().split("\n");

let restArr = []

// 나머지 저장
for(let i = 0; i < input.length; i++) {
    restArr.push(input[i] % 42)
}

// 중복 제거
const result = new Set([...restArr])

// 정답 출력
console.log(result.size)

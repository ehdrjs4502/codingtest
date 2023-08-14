const fs = require('fs');
const input = fs.readFileSync("./input/17176.txt").toString().trim().split("\n");

const n = input.shift()

// 암호문, 평문 저장
const numArr = input[0].split(' ').map(Number)
const textArr = input[1].split('')

// 평문을 암호문으로 변환
for(let i = 0; i < n; i++) {
    if(textArr[i] === ' ') {
        textArr[i] = 0
    } else if(textArr[i] === textArr[i].toLowerCase()){
        textArr[i] = textArr[i].charCodeAt() - 70
    } else {
        textArr[i] = textArr[i].charCodeAt() - 64
    }
}

// 평문, 암호문 정렬
textArr.sort((a,b) => {
    return a -b 
})
numArr.sort((a,b) => {
    return a -b 
})

let result = true

// 정렬한 평문, 암호문 비교해서 숫자가 다르면 false
for(let j = 0; j < n; j++) {
    if(textArr[j] !== numArr[j]) {
        result = false
        break
    }
}

// 출력
result ? console.log('y') : console.log('n')
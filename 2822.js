const fs = require('fs');
const input = fs.readFileSync("./input/2822.txt").toString().trim().split("\n");

const map = new Map()
let topArr = []
let total = 0
let numArr = []

// Map으로 key: 점수, value: 문제 번호 저장
for(let i = 0; i < input.length; i++) {
    map.set(input[i],i+1 )
}

// 가장 높은 점수 5개 저장
for(let i = 0; i < 5; i++) {
    input.sort((a, b) => {
        return b - a
    })
    topArr.push(input[i])
}

// 가장 높은 점수들의 합
total = topArr.reduce((a,b) => {
    return parseInt(a) + parseInt(b)
})

// 가장 높은 점수들의 문제 번호 저장
topArr.map((item) => {
    numArr.push(map.get(item))
})

// 정답 출력
console.log(total)
console.log(numArr.sort((a,b) => {
    return a - b
}).join(' '))
const fs = require('fs');
const input = fs.readFileSync("./input/2161.txt").toString().trim()

let cards = []
let result = []

// 1 ~ N까지 카드 배열 생성
for(let i = 1; i <= input; i++) {
    cards.push(i)
}

// cards가 1장 남을때까지 반복문 돌림
while(cards.length !== 1) {
    result.push(cards.shift()) // result에 제일 위에 있는 카드 저장
    cards.push(cards.shift()) // 제일 위에 있는 카드를 맨 밑으로 옮김
}

result.push(cards.shift()) // 마지막에 남게 되는 카드 저장

console.log(result.join(' '))
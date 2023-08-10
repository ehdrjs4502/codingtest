const fs = require('fs');
const input = fs.readFileSync("./input/10815.txt").toString().trim().split("\n");

const [N, M] = [Number(input[0]), Number(input[2])];

//상근이가 가지고 있는 카드 set에 저장
const [myCards,cards] = [new Set(input[1].split(' ').map(Number)),input[3].split(' ').map(Number)]

let result = ''

// 상근이가 가지고 있는 카드 중 찾는 카드가 있는 지 확인해서 있으면 1 없으면 0
for(let i = 0; i < M; i++) {
    myCards.has(cards[i]) === true ? result += 1 + ' ' : result += 0 + ' '
}

console.log(result)

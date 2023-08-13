const fs = require('fs');
const input = fs.readFileSync("./input/7785.txt").toString().trim().split("\n");
const n = input.shift()

const set = new Set()


// Set에다가 enter면 추가하고 leave면 삭제
for(let i = 0; i < n; i++) {
    const [name, action] = input[i].split(' ')
    if(action === 'enter') {
        set.add(name)
    } if(action === 'leave') {
        set.delete(name)
    }
}

// 사무실에 남은 사람 배열에 저장
let result = [...set].sort()

// 역순 정렬 후 출력
result.reverse()
console.log(result.join('\n'))
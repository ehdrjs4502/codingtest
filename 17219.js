const fs = require('fs');
const input = fs.readFileSync("./input/17219.txt").toString().trim().split("\n");

let [pwCnt, siteCnt] = input.shift().split(' ');
const map = new Map()

// key: 사이트, value: 비밀번호 객체 만들기
for(let i = 0; i < pwCnt; i++) {
    map.set(input[i].split(' ')[0], input[i].split(' ')[1])
}

// get으로 맵 객체 조회
for(let i = pwCnt; i < input.length; i++) {
    console.log(map.get(input[i]))
    
}

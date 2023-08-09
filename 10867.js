const fs = require('fs');
const [n, input] = fs.readFileSync("./input/10867.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ")


// set으로 중복 제거
const set = new Set(inputArr)
const arr = [...set]

// 정렬 후 출력
console.log(arr.sort((a,b) => {
    return a - b
}).join(' '))
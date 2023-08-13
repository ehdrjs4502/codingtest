const fs = require('fs');
const input = fs.readFileSync("./input/9093.txt").toString().trim().split("\n");

const n = input.shift()

for(let i = 0; i < n; i++) {
    const wordArr = input[i].split(' ')
    let reverseArr = []
    for(let j = 0; j< wordArr.length; j++) {
        reverseArr.push(wordArr[j].split('').reverse().join(''))
    }
    console.log(reverseArr.join(' '))
}
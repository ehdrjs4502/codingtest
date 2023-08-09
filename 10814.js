const fs = require('fs');
const input = fs.readFileSync("./input/10814.txt").toString().trim().split("\n");

input.shift()

// 정렬
let result = input.sort((a,b) => {
    return a.split(' ')[0] - b.split(' ')[0]
})

console.log(result.join('\r'))


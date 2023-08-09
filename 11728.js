const fs = require('fs');
const input = fs.readFileSync("./input/11728.txt").toString().trim().split("\n");
input.shift()

let arr = input.map((item) => {
    return item.split(' ')
})

let result = []

console.log(result.concat(arr[0],arr[1]).sort((a,b) => {
    return a - b
}).join(' '))
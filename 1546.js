const fs = require('fs');
const input = fs.readFileSync("./input/1546.txt").toString().trim().split("\n");

let arr = input[1].split(" ")

const max = Math.max(...arr)

arr = arr.map((x) => Number(x) / max * 100);

const sum = arr.reduce((a, b) => {
    return a + b;
})

console.log(sum / input[0])
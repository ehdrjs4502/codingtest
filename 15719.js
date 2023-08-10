const fs = require('fs');
const input = fs.readFileSync("./input/15719.txt").toString().trim().split("\n");

const n = parseInt(input[0])
const arr = input[1].split(' ').map(Number)

const check = new Array(n).fill(false)

for (const num of arr) {
    if (check[num]) {
        console.log(num)
        break;
    }
    check[num] = true
}
const fs = require('fs');
const input = fs.readFileSync("./input/2750.txt").toString().trim().split("\n");

input.shift();

const sortArr = input.sort((a, b) => {
    return a - b;
})

for(let i = 0; i < sortArr.length; i++) {
    console.log(sortArr[i]);
}

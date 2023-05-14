const fs = require('fs');
const input = fs.readFileSync("./input/1475.txt").toString().trim();
let obj = {
    0 : 0,
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
}

for(let i = 0; i < input.length; i++) {
    if(input[i] == '6' || input[i] == '9') {
        obj['6'] += 1
    } else {
        obj[input[i]] += 1
    }
    
}

obj['6'] = Math.ceil(obj['6'] / 2)

let max = Math.max(...Object.values(obj))

console.log(max)
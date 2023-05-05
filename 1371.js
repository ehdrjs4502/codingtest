const fs = require('fs');
const input = fs.readFileSync("./input/1371.txt").toString().trim().split("\n");
const str = input.join('');
const obj = {};
let max = 0;
let answer = [];

for(let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
}

obj[' '] = 0;

max = Math.max(...Object.values(obj));

for(i in obj) { 
    if(obj[i] == max) {
        answer.push(i);
    }
}

console.log(answer.sort().join(''));  
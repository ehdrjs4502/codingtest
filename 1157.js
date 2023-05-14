const fs = require('fs');
const input = fs.readFileSync("./input/1157.txt").toString().split('\n');

let str = input[0].toUpperCase();
let obj = {};
let result = '';
let count = 0

for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] === undefined) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]] += 1;
    }
    
}

for(i in obj) {
    if(obj[i] > count) {
        count = obj[i]; 
        result = i
    } else if (obj[i] === count) {
        result ='?';
    }
}

console.log(result);
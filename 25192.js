const fs = require('fs');
const input = fs.readFileSync("./input/25192.txt").toString().trim().split("\n");
input.shift();
let idx = 0;
let conunt = 0;
let arr = [];
let uniqueArr = [];

for(let i = 0; i < input.length; i++) {
    if(input[i] == "ENTER\r" || input[i] == "ENTER") {
        idx = i;
        if(arr.length != 0) {
            const set = new Set(arr);
            uniqueArr = [...set];
            conunt += uniqueArr.length;
            arr = [];
        }
    } else if(i > idx) {
        arr.push(input[i]);
    }
}

if(arr.length != 0) {
    const set = new Set(arr);
    uniqueArr = [...set];
    conunt += uniqueArr.length;
}


console.log(conunt);
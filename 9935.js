const fs = require('fs');
const input = fs.readFileSync("./input/9935.txt").toString().trim().split("\n");

let str = input[0];
let bomb = input[1];

while(str.includes(bomb)) {
    str = str.replaceAll(bomb, "");
}

console.log(str.length == 0 ? "FRULA" : str);
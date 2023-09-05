const fs = require("fs");
const input = fs.readFileSync("./input/14916.txt").toString().trim();
let cnt = 0;
let num = Number(input);

while (num > 0) {
    if (num % 5 === 0) {
        return console.log(num / 5 + cnt);
    }
    cnt++;
    num -= 2;
}

console.log(-1);

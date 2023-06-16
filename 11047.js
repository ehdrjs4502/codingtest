const fs = require('fs');
const input = fs.readFileSync("./input/11047.txt").toString().trim().split("\n");

let k = input[0].split(" ")[1];
input.shift();
let moneys = input.map((x) => Number(x));
let answer = 0;

moneys = moneys.sort((a, b) => {
    return b - a;
})

for(let i = 0; i < moneys.length; i++) {
    if(k < moneys[i]) {
        continue;
    } else {
        const share = Math.floor(k / moneys[i]);
        k -= moneys[i] * share;
        answer += share;
    }
}

console.log(answer);
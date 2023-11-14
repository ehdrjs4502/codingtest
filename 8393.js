const fs = require("fs");
const input = fs.readFileSync("./input/8393.txt").toString().trim();

const n = Number(input);

let result = 0;

for (let i = 1; i <= n; i++) {
    result += i;
}

console.log(result);

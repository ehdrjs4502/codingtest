const fs = require("fs");
const input = fs.readFileSync("./input/1789.txt").toString().trim();

let sum = 0;
let result = 0;

for (let i = 1; ; i++) {
    sum += i;
    result++;
    if (sum > input) {
        result--;
        break;
    }
}

console.log(result);

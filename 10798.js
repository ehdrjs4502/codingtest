const fs = require("fs");
const input = fs.readFileSync("./input/10798.txt").toString().trim().split("\n");

const max = Math.max(...input.map((item) => item.length));

let result = "";
for (let i = 0; i < max; i++) {
    for (let j = 0; j < input.length; j++) {
        result += input[j][i] || "";
    }
}

console.log(result);

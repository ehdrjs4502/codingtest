const fs = require("fs");
const input = fs.readFileSync("./input/11478.txt").toString().trim();

const map = new Map();

for (let i = 1; i <= input.length; i++) {
    for (let j = 0; j <= input.length - i; j++) {
        map.set(input.substring(j, i + j), 0);
    }
}

console.log(map.size);

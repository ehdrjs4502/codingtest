const fs = require("fs");
const input = fs.readFileSync("./input/14425.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

let map = new Map();
let result = 0;

for (let i = 0; i < N; i++) {
    map.set(input[i], 0);
}

for (let i = N; i < input.length; i++) {
    if (map.get(input[i]) !== undefined) {
        result++;
    }
}

console.log(result);

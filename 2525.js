const fs = require("fs");
const input = fs.readFileSync("./input/2525.txt").toString().trim().split("\n");

let [H, M] = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

const time = Number(input.shift());

if (M + time >= 60) {
    H = H + Math.floor((M + time) / 60);
    M = (M + time) % 60;
} else {
    M = M + time;
}

if (H >= 24) {
    H -= 24;
}

console.log(H, M);

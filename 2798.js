const fs = require("fs");
const input = fs.readFileSync("./input/2798.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const cards = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

let result = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = cards[i] + cards[j] + cards[k];
            if (sum > result && sum <= M) {
                result = sum;
            }

            if (sum === M) {
                break;
            }
        }
    }
}

console.log(result);

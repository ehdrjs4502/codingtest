const fs = require("fs");
const input = fs.readFileSync("./input/2563.txt").toString().trim().split("\n");

const n = input.shift();

// 100 * 100 도화지 생성
const paper = new Array(100).fill().map((el) => new Array(100).fill(0));

let result = 0;

for (let i = 0; i < n; i++) {
    const [x, y] = input[i].split(" ").map((item) => Number(item));
    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            paper[j][i] = 1;
        }
    }
}

paper.flat().map((item) => {
    item === 1 && result++;
});

console.log(result);

const fs = require("fs");
const input = fs.readFileSync("./input/2566.txt").toString().trim().split("\n");

let arr = [];

// 2차원 배열로 만들기
for (let i = 0; i < 9; i++) {
    arr.push(input[i].split(" ").map((item) => Number(item)));
}

// 1차원 배열로 만든 다음에 max값 구하기
const max = Math.max(...arr.flat());
console.log(max);

// 반복문 돌려서 max값이랑 같은 index 출력
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (arr[i][j] === max) {
            console.log(i + 1, j + 1);
            break;
        }
    }
}

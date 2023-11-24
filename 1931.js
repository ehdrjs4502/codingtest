const fs = require("fs");
const input = fs.readFileSync("./input/1931.txt").toString().trim().split("\n");

const n = input.shift();
let result = 0;

// 끝나는 시간으로 정렬하는데 같은 경우에는 시작하는 시간으로 정렬
const arr = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let finishTime = 0;

// 시작 시간이 최근 회의가 끝나는 시간보다 크거나 같으면 사용할 수 있음
for (let i = 0; i < n; i++) {
  if (arr[i][0] >= finishTime) {
    finishTime = arr[i][1];
    result++;
  }
}

console.log(result);

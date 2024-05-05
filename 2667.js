const fs = require("fs");
const input = fs
  .readFileSync("./input/2667.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input.map((v) => v.split("").map(Number));
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let total = 0;
let countArr = [];

const bfs = (y, x) => {
  const queue = [[y, x]];
  let isOne = true;
  let count = 0;
  while (queue.length) {
    const [nowY, nowX] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextY = nowY + move[i][1];
      const nextX = nowX + move[i][0];

      if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < n && arr[nextY][nextX]) {
        arr[nextY][nextX] = 0;
        queue.push([nextY, nextX]);
        count++;
        isOne = false;
      }
    }
  }
  countArr.push(isOne ? count + 1 : count);
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j]) {
      bfs(i, j);
      total++;
    }
  }
}

console.log(total);
console.log(countArr.sort((a, b) => a - b).join("\n"));

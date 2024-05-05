const fs = require("fs");
const input = fs
  .readFileSync("./input/2178.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
let arr = input.map((v) => v.split("").map(Number));
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (y, x) => {
  const queue = [[y, x, 1]];
  while (queue.length) {
    const [nowY, nowX, result] = queue.shift();
    if (nowY === n - 1 && nowX === m - 1) return result;

    for (let i = 0; i < 4; i++) {
      const nextY = nowY + move[i][1];
      const nextX = nowX + move[i][0];

      console.log(nextY, nextX);
      if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < m && arr[nextY][nextX]) {
        arr[nextY][nextX] = 0;
        queue.push([nextY, nextX, result + 1]);
      }
    }
  }
};

console.log(bfs(0, 0));

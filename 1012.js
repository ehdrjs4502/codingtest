const fs = require("fs");
const input = fs
  .readFileSync("./input/1012.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let arr = [];
let visited = [];
const result = [];

const dfs = (y, x, n, m) => {
  visited[y][x] = true;
  for (let i = 0; i < 4; i++) {
    let nextY = y + move[i][1];
    let nextX = x + move[i][0];
    if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < m && arr[nextY][nextX] && !visited[nextY][nextX]) {
      dfs(nextY, nextX, n, m);
    }
  }
};

const bfs = (y, x, n, m) => {
  const queue = [[y, x]];
  while (queue.length) {
    const [nowY, nowX] = queue.shift();
    visited[nowY][nowX] = true;
    for (let i = 0; i < 4; i++) {
      const nextY = nowY + move[i][1];
      const nextX = nowX + move[i][0];
      if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < m && arr[nextY][nextX] && !visited[nextY][nextX]) {
        queue.push([nextY, nextX]);
      }
    }
  }
};

for (let i = 0; i < t; i++) {
  const [m, n, k] = input.shift().split(" ").map(Number);
  let count = 0;
  arr = Array.from(Array(n), () => Array(m).fill(0));
  visited = Array.from(Array(n), () => Array(m).fill(false));
  for (let j = 0; j < k; j++) {
    const [x, y] = input.shift().split(" ");
    arr[y][x] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] && !visited[i][j]) {
        dfs(i, j, n, m);
        count++;
      }
    }
  }
  result.push(count);
}

console.log(result.join("\n"));

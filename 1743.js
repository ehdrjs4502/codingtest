const fs = require("fs");
const input = fs.readFileSync("./input/1743.txt").toString().trim().split("\n");

const [n, m, _] = input.shift().split(" ").map(Number);
const graph = Array.from(Array(n), () => Array(m).fill(0));
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
let cnt = 1;
let result = 0;

input.forEach((value) => {
  [y, x] = value.split(" ").map(Number);
  graph[y - 1][x - 1] = 1;
});

const dfs = (x, y) => {
  graph[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[i][0];
    const nextY = y + dir[i][1];
    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && graph[nextX][nextY]) {
      graph[nextX][nextY] = 0;
      cnt++;
      dfs(nextX, nextY);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j]) {
      dfs(i, j);
      if (cnt > result) result = cnt;
      cnt = 1;
    }
  }
}

console.log(result);

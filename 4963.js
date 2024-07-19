const fs = require("fs");
const input = fs.readFileSync("./input/4963.txt").toString().trim().split("\n");

while (true) {
  const [w, h] = input.shift().split(" ").map(Number);
  if (w === 0 && h === 0) return;
  const graph = [];
  const visited = Array.from(Array(h), () => Array(w).fill(false));
  const dx = [0, 0, -1, 1, -1, 1, -1, 1];
  const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
  let result = 0;

  for (let i = 0; i < h; i++) {
    graph.push(input.shift().split(" ").map(Number));
  }

  const dfs = (x, y) => {
    visited[x][y] = true;
    for (let i = 0; i < 8; i++) {
      const [nextX, nextY] = [x + dx[i], y + dy[i]];
      if (nextX >= 0 && nextX < h && nextY >= 0 && nextY < w && graph[nextX][nextY] && !visited[nextX][nextY]) {
        dfs(nextX, nextY);
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] && !visited[i][j]) {
        dfs(i, j);
        result++;
      }
    }
  }

  console.log(result);
}

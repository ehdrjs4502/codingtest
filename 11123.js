const fs = require("fs");
const input = fs.readFileSync("./input/11123.txt").toString().trim().split("\n");

const t = input.shift();
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

for (let i = 0; i < t; i++) {
  const dfs = (x, y) => {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nextX = x + dir[i][0];
      const nextY = y + dir[i][1];
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && arr[nextX][nextY] !== "." && !visited[nextX][nextY]) {
        dfs(nextX, nextY);
      }
    }
  };

  const [n, m] = input.shift().split(" ").map(Number);
  const arr = [];
  const visited = [...new Array(n)].map((value) => [...new Array(m).fill(false)]);
  let count = 0;
  for (let i = 0; i < n; i++) {
    arr.push(input.shift().split(""));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && arr[i][j] === "#") {
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}

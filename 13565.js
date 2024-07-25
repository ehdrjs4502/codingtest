const fs = require("fs");
const input = fs.readFileSync("./input/13565.txt").toString().trim().split("\n");

const dfs = (x, y) => {
  visited[x][y] = true;
  if (x === n - 1) {
    result = true;
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[i][0];
    const nextY = y + dir[i][1];
    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && !arr[nextX][nextY] && !visited[nextX][nextY]) {
      dfs(nextX, nextY);
    }
  }
};

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((value) => value.split("").map(Number));
const visited = [...new Array(n)].map((value) => [...new Array(m).fill(false)]);
let result = false;
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

for (let j = 0; j < m; j++) {
  if (!visited[0][j] && !arr[0][j]) {
    dfs(0, j);
  }
}

console.log(result ? "YES" : "NO");

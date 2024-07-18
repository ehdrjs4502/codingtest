const fs = require("fs");
const input = fs.readFileSync("./input/31575.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((value) => value.split(" ").map(Number));
const visited = [...new Array(m)].map((value) => [...new Array(n)]);
const dir = [
  [1, 0],
  [0, 1],
];
let result = false;

const dfs = (y, x) => {
  visited[y][x] = true;
  if (y === m - 1 && x === n - 1) {
    result = true;
    return;
  }
  for (let i = 0; i < 2; i++) {
    let nextX = x + dir[i][0];
    let nextY = y + dir[i][1];

    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && arr[nextY][nextX] && !visited[nextY][nextX]) {
      dfs(nextY, nextX);
    }
  }
};

dfs(0, 0);

console.log(result ? "Yes" : "No");

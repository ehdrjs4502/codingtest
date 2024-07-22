const fs = require("fs");
const input = fs.readFileSync("./input/21736.txt").toString().trim().split("\n");

function indexOfTarget(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === element) {
        return [i, j];
      }
    }
  }
  return null;
}

const dfs = (x, y) => {
  visited[x][y] = true;
  if (arr[x][y] === "P") {
    result++;
  }
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[i][0];
    const nextY = y + dir[i][1];
    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && arr[nextX][nextY] !== "X" && !visited[nextX][nextY]) {
      dfs(nextX, nextY);
    }
  }
};

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((value) => value.split(""));
const visited = [...new Array(n)].map((value) => [...new Array(m).fill(false)]);
const [x, y] = indexOfTarget(arr, "I");
let result = 0;
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

dfs(x, y);

console.log(!result ? "TT" : result);

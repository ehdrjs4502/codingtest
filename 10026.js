const fs = require("fs");
const input = fs.readFileSync("./input/10026.txt").toString().trim().split("\n");

const dfs = (y, x, color) => {
  visited[y][x] = true;
  for (let i = 0; i < 4; i++) {
    const nextY = y + move[i][1];
    const nextX = x + move[i][0];
    if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < n && !visited[nextY][nextX] && color == rgb[nextY][nextX]) {
      dfs(nextY, nextX, color);
    }
  }
};

const n = +input.shift();
let rgb = input.map((value) => value.split(""));
let visited = Array.from(Array(n), () => Array(n).fill(false));
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

let count = 0;
let blindCount = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j, rgb[i][j]);
      count++;
    }
  }
}

visited = Array.from(Array(n), () => Array(n).fill(false));
rgb = rgb.map((value) =>
  value.map((color) => {
    return color === "R" ? "G" : color;
  })
);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j, rgb[i][j]);
      blindCount++;
    }
  }
}

console.log(count, blindCount);

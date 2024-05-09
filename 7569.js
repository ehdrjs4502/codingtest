const fs = require("fs");
const input = fs
  .readFileSync("./input/7569.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const bfs = (tomatos) => {
  let queue = tomatos;
  while (queue.length) {
    let newQueue = [];
    queue.forEach(([nowZ, nowX, nowY, nowDay]) => {
      for (let i = 0; i < 6; i++) {
        const nextZ = nowZ + move[i][2];
        const nextX = nowX + move[i][1];
        const nextY = nowY + move[i][0];

        if (
          nextZ >= 0 &&
          nextZ < h &&
          nextX >= 0 &&
          nextX < n &&
          nextY >= 0 &&
          nextY < m &&
          arr[nextZ][nextX][nextY] === 0
        ) {
          arr[nextZ][nextX][nextY] = 1;
          newQueue.push([nextZ, nextX, nextY, nowDay + 1]);
          day = nowDay + 1;
        }
      }
      queue = newQueue;
    });
  }
};

const [m, n, h] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: h }, () => Array.from({ length: n }, () => Array.from({ length: m }, () => 0)));
const tomatos = [];
let day = 0;
const move = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    arr[i][j] = input.shift().split(" ").map(Number);
  }
}

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (arr[i][j][k] == 1) tomatos.push([i, j, k, 0]);
    }
  }
}

bfs(tomatos);

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (arr[i][j][k] === 0) {
        return console.log(-1);
      }
    }
  }
}

console.log(day);

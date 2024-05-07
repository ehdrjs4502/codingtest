const fs = require("fs");
const input = fs
  .readFileSync("./input/7576.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const bfs = (tomatos) => {
  let queue = tomatos;
  while (queue.length) {
    let newQueue = [];
    queue.forEach(([nowY, nowX, nowDay]) => {
      for (let i = 0; i < 4; i++) {
        const nextY = nowY + move[i][0];
        const nextX = nowX + move[i][1];
        if (nextY >= 0 && nextX >= 0 && nextY < n && nextX < m && arr[nextY][nextX] === 0) {
          arr[nextY][nextX] = 1;
          newQueue.push([nextY, nextX, nowDay + 1]);
          day = nowDay + 1;
        }
      }
      queue = newQueue;
    });
  }
};

const [m, n] = input.shift().split(" ").map(Number);
let arr = input.map((value) => value.split(" ").map(Number));
const tomatos = [];
const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let day = 0;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[j][i] === 1) {
      tomatos.push([j, i, 0]);
    }
  }
}

bfs(tomatos);

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[j][i] === 0) {
      return console.log(-1);
    }
  }
}
console.log(day);

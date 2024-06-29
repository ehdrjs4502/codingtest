const fs = require("fs");
const input = fs
  .readFileSync("./input/2644.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const dfs = (cur, depth) => {
  if (cur === y) result = depth;
  for (const num of graph[cur]) {
    if (!visited[num]) {
      visited[num] = true;
      dfs(num, depth + 1);
    }
  }
};

const n = +input.shift();
const [x, y] = input.shift().split(" ").map(Number);
const m = +input.shift();
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);
let result = 0;

input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

dfs(x, 0);

console.log(result ? result : -1);

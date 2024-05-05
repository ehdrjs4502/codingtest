const fs = require("fs");
const input = fs
  .readFileSync("./input/11724.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);
let result = 0;

const dfs = (start) => {
  for (let next of graph[start]) {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next);
    }
  }
};

const bfs = (start) => {
  const q = [start];

  while (q.length) {
    const now = q.shift();
    for (let next of graph[now]) {
      if (!visited[next]) {
        q.push(next);
        visited[next] = true;
      }
    }
  }
};

input.forEach((value) => {
  const [from, to] = value.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

console.log(graph);

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    result++;
  }
}

console.log(result);

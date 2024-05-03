const fs = require("fs");
const input = fs
  .readFileSync("./input/18352.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m, k, x] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(0);
let result = [];

arr.map(([from, to]) => graph[from].push(to));

console.log(graph);

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const now = queue.shift();
    if (visited[now] == k + 1) {
      result.push(now);
      continue;
    }

    for (const next of graph[now]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = visited[now] + 1;
      }
    }
  }
};

bfs(x);

if (result.length) {
  console.log(result.sort((a, b) => a - b).join("\n"));
} else {
  console.log(-1);
}

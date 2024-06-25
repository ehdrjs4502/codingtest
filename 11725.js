const fs = require("fs");
const input = fs
  .readFileSync("./input/11725.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const dfs = (v) => {
  //1. 탐색 시작 노드 방문 처리
  visited[v] = true;

  //2. 탐색 노드의 인접 노드 확인
  for (const cur of graph[v]) {
    if (!visited[cur]) {
      result[cur] = v;
      dfs(cur);
    }
  }
};
const n = +input.shift();
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);
const result = [...new Array(n + 1)].fill(0);

input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

dfs(1);
result.splice(0, 2);
console.log(result.join("\n"));

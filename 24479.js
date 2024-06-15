const fs = require("fs");
const input = fs
  .readFileSync("./input/24479.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const dfs = (graph, v, visited) => {
  //1. 탐색 시작 노드 방문 처리
  visited[v] = count;

  //2. 탐색 노드의 인접 노드 확인
  for (const cur of graph[v]) {
    if (!visited[cur]) {
      count++;
      dfs(graph, cur, visited);
    }
  }
};

const [n, m, r] = input.shift().split(" ").map(Number);
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(0);
let count = 1;
const result = [];

// 그래프 생성
input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

graph.map((value) => value.sort((a, b) => a - b));

dfs(graph, r, visited);

for (let i = 1; i < visited.length; i++) {
  result.push(visited[i]);
}

console.log(result.join("\n"));

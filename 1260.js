const fs = require("fs");
const input = fs
  .readFileSync("./input/1260.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const dfs = (graph, v, visited) => {
  //1. 탐색 시작 노드 방문 처리
  visited[v] = true;
  result.push(v);

  //2. 탐색 노드의 인접 노드 확인
  for (const cur of graph[v]) {
    if (!visited[cur]) {
      dfs(graph, cur, visited);
    }
  }
};

const bfs = (graph, start, visited) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while (q.length !== 0) {
    const v = q.shift();
    result.push(v);

    for (const cur of graph[v]) {
      if (!visited[cur]) {
        q.push(cur);
        visited[cur] = true;
      }
    }
  }
};

const [n, m, v] = input.shift().split(" ").map(Number);
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);
let result = [];

// 그래프 생성
input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

graph.forEach((value) => {
  value.sort((a, b) => a - b);
});

dfs(graph, v, visited);
console.log(result.join(" "));

visited.fill(false);
result = [];

bfs(graph, v, visited);
console.log(result.join(" "));

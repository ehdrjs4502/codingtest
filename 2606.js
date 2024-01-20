const fs = require("fs");
const input = fs
  .readFileSync("./input/2606.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const dfs = (start) => {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = true;
      result++;
      dfs(end);
    }
  }
};

const n = Number(input.shift());
input.shift();
let result = 0;
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);

// 그래프 생성
input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

// 1이 숙주니까 미리 빼줌
visited[1] = true;
dfs(1);

console.log(result);

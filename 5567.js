const fs = require("fs");
const input = fs.readFileSync("./input/5567.txt").toString().trim().split("\n");

const bfs = (start) => {
  let queue = [[start, 0]];
  let count = 0;

  while (queue.length !== 0) {
    let [now, depth] = queue.shift();
    for (let next of graph[now]) {
      if (!visited[next] && depth < 2) {
        visited[next] = true;
        queue.push([next, depth + 1]);
        count++;
      }
    }
  }
  return count;
};

const n = +input.shift();
const m = +input.shift();
const graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(false);
input.forEach((value) => {
  const [from, to] = value.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

visited[1] = true;
console.log(bfs(1));

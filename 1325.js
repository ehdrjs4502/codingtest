const fs = require("fs");
const input = fs.readFileSync("./input/1325.txt").toString().trim().split("\n");

const dfs = (idx) => {
  const stack = [idx];
  const visited = new Array(n + 1).fill(false);
  let count = 0;
  visited[idx] = true;

  while (stack.length) {
    const node = stack.pop();
    for (let next of graph[node]) {
      if (visited[next]) continue;
      stack.push(next);
      visited[next] = true;
      count++;
    }
  }

  return count;
};

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
let max = -1;
let result = [];

for (let i = 0; i < m; i++) {
  const [front, back] = input[i].split(" ");
  graph[+back].push(+front);
}

for (let i = 1; i <= n; i++) {
  let count = dfs(i);
  if (count > max) {
    max = count;
    result = [i];
  } else if (count === max) {
    result.push(i);
  }
}

console.log(result.join(" "));

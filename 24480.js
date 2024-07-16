const fs = require("fs");
const input = fs.readFileSync("./input/24480.txt").toString().trim().split("\n");

const dfs = (index) => {
  if (!visited[index]) {
    visited[index] = count++;
    for (const next of arr[index]) {
      dfs(next);
    }
  }
};

const [n, m, r] = input.shift().split(" ").map(Number);
const arr = [...Array(n + 1)].map(() => []);
const visited = new Array(n + 1).fill(0);
let count = 1;

input.forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  arr[start].push(end);
  arr[end].push(start);
});

for (let value of arr) {
  value.sort((a, b) => b - a);
}

dfs(r);

console.log(visited.slice(1).join("\n"));

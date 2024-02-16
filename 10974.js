const fs = require("fs");
let input = fs.readFileSync("./input/10974.txt").toString().trim();

function dfs(num) {
  if (num === n) {
    let numArr = [];
    for (let i = 0; i < n; i++) {
      numArr.push(selected[i]);
    }

    result.push(numArr.join(" "));
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) {
      continue;
    }

    selected[num] = i;
    visited[i] = true;

    dfs(num + 1);
    visited[i] = false;
  }
}

const n = Number(input);
let visited = Array(n).fill(false);
let selected = Array(n).fill(0);
let result = [];

dfs(0);

console.log(result.join("\n"));

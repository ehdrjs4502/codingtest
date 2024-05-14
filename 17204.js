const fs = require("fs");
const input = fs.readFileSync("./input/17204.txt").toString().trim().split("\n");

const dfs = (num) => {
  if (visited[num]) {
    return console.log(-1);
  }
  count++;

  if (k === num) {
    return console.log(count);
  }
  visited[num] = 1;
  dfs(arr[num]);
};

const [n, k] = input.shift().split(" ").map(Number);
const arr = new Array(n).fill(0);
let visited = new Array(n).fill(0);
let count = 0;

input.map((value, idx) => (arr[idx] = +value));
visited[0] = 1;
dfs(arr[0]);

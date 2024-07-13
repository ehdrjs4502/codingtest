const fs = require("fs");
const input = +fs.readFileSync("./input/16922.txt").toString().trim();

const L = [1, 5, 10, 50];
const visited = Array.from({ length: input }).fill(false);
let result = 0;

const bt = (count, index, total) => {
  if (count == input) {
    if (!visited[total]) {
      visited[total] = true;
      result++;
    }
    return;
  }

  for (let i = index; i < 4; i++) {
    bt(count + 1, i, total + L[i]);
  }
};

bt(0, 0, 0);

console.log(result);

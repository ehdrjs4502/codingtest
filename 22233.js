const fs = require("fs");
const input = fs.readFileSync("./input/22233.txt").toString().trim().split("\n");

const keywordMap = new Map();
const result = [];

const [n, m] = input.shift().split(" ").map(Number);

for (let i = 0; i < n; i++) {
  keywordMap.set(input[i], 1);
}

for (let i = n; i < n + m; i++) {
  input[i].split(",").map((value) => {
    if (keywordMap.has(value)) {
      keywordMap.delete(value);
    }
  });
  result.push(keywordMap.size);
}

console.log(result.join("\n"));

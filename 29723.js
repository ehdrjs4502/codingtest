const fs = require("fs");
const input = fs
  .readFileSync("./input/29723.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m, k] = input.shift().split(" ").map(Number);

let max = 0;
let min = 0;

const subject = {};

for (let i = 0; i < n; i++) {
  const [name, score] = input[i].split(" ");
  subject[name] = +score;
}

for (let i = 0; i < k; i++) {
  const publicSubject = input[n + i];
  max += subject[publicSubject];
  min += subject[publicSubject];
  delete subject[publicSubject];
}

const privateSubject = Object.values(subject).sort((a, b) => a - b);
for (let i = 0; i < m - k; i++) {
  min += privateSubject[i];
  max += privateSubject[privateSubject.length - 1 - i];
}

console.log(min, max);

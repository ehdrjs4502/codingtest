const fs = require("fs");
const input = fs
  .readFileSync("./input/3077.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const answer = input.shift().split(" ");
const answerMap = new Map();
const arr = input.shift().split(" ");
const pair = (n * (n - 1)) / 2;
let len = 1;
let result = 0;

answer.map((value, idx) => {
  answerMap.set(value, idx);
});

for (let i = 0; i < pair; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (j + len > arr.length) break;
    let start = answerMap.get(arr[j]);
    let end = answerMap.get(arr[j + len]);
    start < end && result++;
  }
  len++;
}

console.log(`${result}/${pair}`);

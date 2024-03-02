const fs = require("fs");
const input = fs
  .readFileSync("./input/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

/*
    산술평균 : N개의 수들의 합을 N으로 나눈 값
    중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
    최빈값 : N개의 수들 중 가장 많이 나타나는 값
    범위 : N개의 수들 중 최댓값과 최솟값의 차이
*/

const n = input.shift();
const map = new Map();
const arr = input
  .sort((a, b) => a - b)
  .map((vaule) => {
    map.set(vaule, map.get(vaule) + 1 || 1);
    return Number(vaule);
  });

const sum = arr.reduce((a, b) => a + b);
const result = [];

let max = 0;
let mostArr = [];
map.forEach((value, key) => {
  if (max < value) {
    max = value;
    mostArr = [];
    mostArr.push(key);
  } else if (max === map.get(key)) {
    mostArr.push(key);
  }
});

result.push(Math.round(sum / n) === -0 ? 0 : Math.round(sum / n));
result.push(arr[Math.floor(n / 2)]);
result.push(mostArr.length === 1 ? mostArr[0] : mostArr[1]);
result.push(arr[arr.length - 1] - arr[0]);

console.log(result.join("\n"));

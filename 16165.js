const fs = require("fs");
const input = fs
  .readFileSync("./input/16165.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const girGroupsMap = new Map();
const result = [];

// 걸그룹 정보 저장
for (let i = 0; i < n; i++) {
  const girlGroupName = input.shift();
  const count = Number(input.shift());
  for (let i = 0; i < count; i++) {
    const name = input.shift();
    girGroupsMap.set(name, girlGroupName);
  }
}

// 걸그룹명으로 멤버 맞추기 위해 배열로 변환
const mapToArray = Array(...girGroupsMap);

// 퀴즈 풀기
for (let i = 1; i < input.length; i++) {
  const quiz = input[i - 1];
  const type = input[i];

  if (type == 1) {
    result.push(girGroupsMap.get(quiz));
  } else {
    mapToArray
      .filter((value) => value[1] == quiz)
      .sort((a, b) => {
        return a[0].localeCompare(b[0]);
      })
      .map((value) => {
        result.push(value[0]);
      });
  }
}

console.log(result.join("\n"));

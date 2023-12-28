const fs = require("fs");
const input = fs
  .readFileSync("./input/11101.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const map = new Map();
  let result = [];
  // map에 조건이랑 시간 저장
  input
    .shift()
    .split(",")
    .map((value) => {
      const [terms, time] = value.split(":");
      map.set(terms, Number(time));
    });

  // 그녀를 만족시키는데 필요한 조건의 조합
  input
    .shift()
    .split("|")
    .map((value) => {
      let timeArr = [];
      value.split("&").map((term) => {
        timeArr.push(map.get(term));
      });
      result.push(Math.max(...timeArr));
    });

  console.log(Math.min(...result));
}

const fs = require("fs");
const input = fs.readFileSync("./input/27396.txt").toString().trim().split("\n");

let [S, n] = input.shift().split(" ");

// 초기 M 맵 생성 (대문자와 소문자를 모두 다룸)
const M = new Map(
  Array.from({ length: 52 }, (_, i) => {
    if (i < 26) {
      return [String.fromCharCode("A".charCodeAt(0) + i), String.fromCharCode("A".charCodeAt(0) + i)]; // 대문자
    } else {
      return [String.fromCharCode("a".charCodeAt(0) + i - 26), String.fromCharCode("a".charCodeAt(0) + i - 26)]; // 소문자
    }
  })
);

let result = [];

input.map((value) => {
  let [category, a, b] = value.split(" ");
  if (category == 1) {
    M.set(a, b.replace("\r", ""));
  } else if (category == 2) {
    let convertStr = "";
    let str = "";
    for (let i = 0; i < S.length; i++) {
      convertStr += M.get(S[i]);
    }
    S = convertStr;
    for (let i = 0; i < S.length; i++) {
      str += M.get(S[i]);
    }
    result.push(str);
  }
});

console.log(result.join("\n"));

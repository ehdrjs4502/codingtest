const fs = require("fs");
const input = fs.readFileSync("./input/10546.txt").toString().trim().split("\n");

let n = Number(input.shift());
let result = "";
const map = new Map();

// 마라톤 참가자 저장
for (let i = 0; i < n; i++) {
  if (map.get(input[i])) {
    map.set(input[i], map.get(input[i]) + 1);
  } else {
    map.set(input[i], 1);
  }
}

// 마라톤 완주한 사람 빼기
for (let i = n; i < input.length; i++) {
  if (map.get(input[i])) {
    map.set(input[i], map.get(input[i]) - 1);
  }
}

// 값이 0이 아니면 완주 못한 사람임
map.forEach((value, key) => {
  if (value !== 0) {
    result += key;
  }
});

console.log(result);

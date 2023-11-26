const fs = require("fs");
const input = fs.readFileSync("./input/20920.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ");

const map = new Map();

const words = input.map((item) => {
  return item.replace("\r", "");
});

// map에다가 문자 넣어주는데 m보다 작으면 넣지말고 이미 들어있는 문자면 value 값을 증가시켜줌
words.map((word) => {
  if (word.length < m) {
    return;
  }
  if (map.has(word)) {
    let count = map.get(word);
    count++;
    map.set(word, count);
  } else {
    map.set(word, 1);
  }
});

// map을 배열로 변환
const mapToArray = [...map];

// 1. 자주 나오는 단어일수록 앞에 배치, 2. 해당 단어의 길이가 길수록 앞에 배치, 3.알파벳 사전 순으로 배치
mapToArray.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }

  if (a[0].length !== b[0].length) {
    return b[0].length - a[0].length;
  }

  return a[0] < b[0] ? -1 : 1;
});

const result = [];

mapToArray.map((item) => {
  result.push(item[0]);
});

console.log(result.join("\n"));

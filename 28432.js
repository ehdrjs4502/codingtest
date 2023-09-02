const fs = require("fs");
const input = fs
  .readFileSync("./input/28432.txt")
  .toString()
  .trim()
  .split("\n");

let num = input.shift();
let wordArr = [];
let candidateArr = [];
let first = "";
let last = "";

// 끝말잇기한 배열
for (let i = 0; i < num; i++) {
  wordArr.push(input.shift().replace(/\r/g, ""));
}
num = input.shift();

// 후보
for (let i = 0; i < num; i++) {
  candidateArr.push(input.shift().replace(/\r/g, ""));
}

// 만약 wordArr 길이가 1이면 후보도 1개니까 출력하고 걍 끝냄
if (wordArr.length === 1) {
  return console.log(candidateArr[0]);
}

// ? 앞 뒤로 단어 있는지 체크 후 first, last에 해당하는 단어 넣기
for (let i = 0; i < wordArr.length; i++) {
  if (i > 0 && wordArr[i] == "?") {
    first = wordArr[i - 1][wordArr[i - 1].length - 1];
    if (i !== wordArr.length - 1) {
      last = wordArr[i + 1][0];
    }
  } else if (i == 0 && wordArr[i] == "?") {
    last = wordArr[i + 1][0];
  }
}

// first나 last가 빈 문자열이면 앞에 단어 또는 뒤에 단어 하나만 비교해서 이미 쓰인 단어인지 확인 후 맞는 단어
for (let i = 0; i < candidateArr.length; i++) {
  // first 비어있으면 last만 비교해서 중복되지않는 값 출력 
  if (first === "") {
    if (candidateArr[i][candidateArr[i].length - 1] === last) {
      if (wordArr.indexOf(candidateArr[i]) === -1) {
        console.log(candidateArr[i]);
      }
    }
  } else if (last === "") { //  last 비어있으면 first만 비교해서 중복되지않는 값 출력
    if (candidateArr[i][0] === first) {
      if (wordArr.indexOf(candidateArr[i]) === -1) {
        console.log(candidateArr[i]);
      }
    }
  }
  // first, last 둘 다 비교해서 중복되지 않는 값 출력
  if (
    candidateArr[i][0] === first &&
    candidateArr[i][candidateArr[i].length - 1] === last
  ) {
    if (wordArr.indexOf(candidateArr[i]) === -1) {
      console.log(candidateArr[i]);
    }
  }
}

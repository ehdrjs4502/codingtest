const fs = require("fs");
const input = fs.readFileSync("./input/1755.txt").toString().trim();

const obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
};

// 숫자를 받아서 영어로 변환
const numChange = (str) => {
  str = String(str);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(obj[Number(str[i])]);
  }
  return arr;
};

const [start, end] = input.split(" ").map(Number);
const numToStr = [...new Array(end - start + 1)].map(() => []);
let j = 0;
for (let i = start; i <= end; i++) {
  numToStr[j].push(i);
  let str = numChange(i);
  numToStr[j] = [...numToStr[j], ...str];
  j += 1;
}

numToStr.sort((a, b) => {
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }

  if (a[2] > b[2]) {
    return 1;
  }
  if (a[2] < b[2]) {
    return -1;
  }
});

let result = "";

for (let i = 0; i < end - start + 1; i++) {
  result += numToStr[i][0];
  if ((i + 1) % 10 !== 0 || i != end - start) {
    result += " ";
  }
  if ((i + 1) % 10 == 0 || i == end - start) {
    console.log(result);
    result = "";
  }
}

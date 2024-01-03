const fs = require("fs");
const input = fs
  .readFileSync("./input/14720.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

let result = 0;

input[0].split(" ").map((value) => {
  if (value == result % 3) {
    result++;
  }
});

console.log(result);

/*
0은 딸기우유만을 파는 가게, 1은 초코우유만을 파는 가게, 2는 바나나우유만을 파는 가게를 뜻
맨 처음에는 딸기우유를 한 팩 마신다.
딸기우유를 한 팩 마신 후에는 초코우유를 한 팩 마신다.
초코우유를 한 팩 마신 후에는 바나나우유를 한 팩 마신다.
바나나우유를 한 팩 마신 후에는 딸기우유를 한 팩 마신다. 

*/

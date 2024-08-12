const fs = require("fs");
const input = fs
  .readFileSync("./input/2578.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const checkNum = (num) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingoBoard[i][j] === num) {
        bingoBoard[i][j] = -1;
      }
    }
  }
};

const bingoCheck = () => {
  count = 0;
  let row = 0;
  let col = 0;
  let xy = 0;
  let yx = 0;
  let index = 0;

  for (let i = 0; i < 5; i++) {
    row = 0;
    col = 0;
    for (let j = 0; j < 5; j++) {
      row += bingoBoard[i][j];
      col += bingoBoard[j][i];

      if (i == j) {
        xy += bingoBoard[i][j];
      }
      if (i == index && j == 4 - index) {
        yx += bingoBoard[i][j];
        index++;
      }
    }
    if (row == -5) {
      count++;
    }
    if (col == -5) {
      count++;
    }
    if (xy == -5) {
      count++;
    }
    if (yx == -5) {
      count++;
    }
  }
};

const bingoBoard = input.slice(0, 5).map((v) => v.split(" "));
const target = input.slice(5, 10).map((v) => v.split(" "));
let count;
let result = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    result++;
    checkNum(target[i][j]);
    bingoCheck();
    if (count === 3) {
      console.log(result);
      return;
    }
  }
}

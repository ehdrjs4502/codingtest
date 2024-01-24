const fs = require("fs");
const input = fs
  .readFileSync("./input/1018.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const checkBoard = (x, y) => {
  let whiteCheck = 0;
  let blackCheck = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== white[i - y][j - x]) whiteCheck++;
      if (board[i][j] !== black[i - y][j - x]) blackCheck++;
    }
  }

  return whiteCheck < blackCheck ? whiteCheck : blackCheck;
};

const [n, m] = input.shift().split(" ").map(Number);
const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];
const board = input.map((value) => value.split(""));
let result = 100;

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    const min = checkBoard(j, i);
    if (result > min) {
      result = min;
    }
  }
}

console.log(result);

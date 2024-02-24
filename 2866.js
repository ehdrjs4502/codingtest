const fs = require("fs");
const input = fs
  .readFileSync("./input/2866.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const binarySearch = (R, C) => {
  let start = 0;
  let end = R - 1;
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let isDuplicate = false;
    let set = new Set();

    // mid부터 행까지의 문자열 담기
    for (let j = 0; j < C; j++) {
      let str = "";
      for (let i = mid; i < R; i++) {
        str += input[i][j];
      }

      // set에 문자열 저장하고 만약 문자열이 중복되면 멈춤
      if (!set.has(str)) {
        set.add(str);
      } else {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
};

const [R, C] = input.shift().split(" ").map(Number);

console.log(binarySearch(R, C));

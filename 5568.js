const fs = require("fs");
const input = fs
  .readFileSync("./input/5568.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// 조합(Combination)을 구하는 함수
function combination(selectCards, cnt) {
  if (cnt === k) {
    set.add(selectCards);
    return;
  }

  // 선택한 카드는 제외
  for (let i = 0; i < n; i++) {
    if (chk[i]) continue;
    chk[i] = true;
    combination(selectCards + input[i], cnt + 1);
    chk[i] = false;
  }

  console.log(chk);
}

const n = Number(input.shift());
const k = Number(input.shift());
const set = new Set();
let chk = [];
combination("", 0);
console.log(set.size);

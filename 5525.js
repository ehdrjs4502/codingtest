const fs = require("fs");
const input = fs
  .readFileSync("./input/5525.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// 접두사 함수 계산
function computePrefixFunction(pattern) {
  const prefix = Array(pattern.length).fill(0);
  let k = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (k > 0 && pattern[k] !== pattern[i]) {
      k = prefix[k - 1];
    }
    if (pattern[k] === pattern[i]) {
      k++;
    }
    prefix[i] = k;
  }

  return prefix;
}

// KMP 검색 알고리즘
function KMPSearch(str, pattern) {
  const prefix = computePrefixFunction(pattern);
  let j = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    while (j > 0 && str[i] !== pattern[j]) {
      j = prefix[j - 1];
    }
    if (str[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      count++;
      j = prefix[j - 1];
    }
  }

  return count;
}

const n = +input.shift();
const len = +input.shift();
const str = input.shift();

const pattern = "IOI" + "OI".repeat(n - 1);

console.log(KMPSearch(str, pattern));

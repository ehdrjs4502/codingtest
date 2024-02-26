const fs = require("fs");
const input = fs
  .readFileSync("./input/9575.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const isLuckyNumber = (num) => {
  while (num > 0) {
    const digit = num % 10;
    if (digit !== 5 && digit !== 8) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
};

const T = input.shift();

for (let i = 0; i < T; i++) {
  const result = new Set();
  input.shift();
  let A = [...new Set(input.shift().split(" ").map(Number))];
  input.shift();
  let B = [...new Set(input.shift().split(" ").map(Number))];
  input.shift();
  let C = [...new Set(input.shift().split(" ").map(Number))];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      for (let k = 0; k < C.length; k++) {
        let sum = A[i] + B[j] + C[k];
        if (isLuckyNumber(sum)) {
          result.add(A[i] + B[j] + C[k]);
        }
      }
    }
  }

  console.log(result.size);
}

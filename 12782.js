const fs = require("fs");
const input = fs
  .readFileSync("./input/12782.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

//같은 자릿값에서 값이 서로 다르면 바꾸기

const n = input.shift();
const result = [];

for (let i = 0; i < n; i++) {
  const [num1, num2] = input[i].split(" ");
  let trans0 = 0;
  let trans1 = 0;

  for (let j = 0; j < num1.length; j++) {
    if (num1[j] !== num2[j]) {
      if (num1[j] === "1") trans0++;
      else trans1++;
    }
  }

  result.push(Math.max(trans0, trans1));
}

console.log(result.join("\n"));

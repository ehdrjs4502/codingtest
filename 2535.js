const fs = require("fs");
const input = fs
  .readFileSync("./input/2535.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const result = [];
const sortArr = input.sort((a, b) => {
  const [ACountry, ANum, AScore] = a.split(" ").map(Number);
  const [BCountry, BNum, BScore] = b.split(" ").map(Number);
  return BScore - AScore;
});
let count = 0;

for (let i = 0; i < 2; i++) {
  const [country, num, _] = sortArr[i].split(" ");
  result.push(`${country} ${num}`);
}

if (result[0].split(" ")[0] === result[1].split(" ")[0]) {
  count = 1;
}

for (let i = 2; i < n; i++) {
  const [country, num, _] = sortArr[i].split(" ");
  if (count === 0) {
    result.push(`${country} ${num}`);
    break;
  } else {
    if (result[1].split(" ")[0] !== country) {
      result.push(`${country} ${num}`);
      break;
    }
  }
}

console.log(result.join("\n"));

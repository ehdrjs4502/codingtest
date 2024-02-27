const fs = require("fs");
const input = fs
  .readFileSync("./input/5430.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  const func = input.shift();
  const arrNum = +input.shift();
  const arr = JSON.parse(input.shift());
  let isReverse = false;
  let isError = false;

  for (let j = 0; j < func.length; j++) {
    if (func[j] === "R") {
      isReverse = !isReverse;
    }
    if (func[j] === "D") {
      if (arr.length === 0) {
        result.push("error");
        isError = true;
        break;
      }
      if (isReverse) {
        arr.pop();
      } else {
        arr.shift();
      }
    }
  }

  if (!isError) {
    result.push(JSON.stringify(isReverse ? arr.reverse() : arr));
  }
}

console.log(result.join("\n"));

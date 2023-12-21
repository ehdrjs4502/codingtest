const fs = require("fs");
const { validateHeaderValue } = require("http");
const input = fs
  .readFileSync("./input/1972.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

const result = [];

input.map((value) => {
  if (value.length === 1) {
    return result.push(value + " is surprising.");
  }
  let isSurprising = true;
  for (let i = 0; i <= value.length - 2; i++) {
    const map = new Map();
    for (let j = 0; j + i + 1 < value.length; j++) {
      const word = value[j] + value[j + i + 1];
      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        isSurprising = false;
        break;
      }
    }
    if (!isSurprising) break;
  }
  result.push(isSurprising ? value + " is surprising." : value + " is NOT surprising.");
});

console.log(result.join("\n"));

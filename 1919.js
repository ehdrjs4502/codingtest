const fs = require("fs");
const input = fs
  .readFileSync("./input/1919.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const wordCalculator = (word) => {
  let [first, second, last] = word.split("").map((value) => value.charCodeAt(0) - 65);
  return first * 26 ** 2 + second * 26 + last;
};

const n = input.shift();
const result = [];

input.forEach((value) => {
  let [word, num] = value.split("-");
  let wordToNum = wordCalculator(word);
  Math.abs(wordToNum - num) <= 100 ? result.push("nice") : result.push("not nice");
});

console.log(result.join("\n"));

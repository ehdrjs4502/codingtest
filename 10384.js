const fs = require("fs");
const input = fs
  .readFileSync("./input/10384.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function countAlphabets(inputString) {
  const alphabetCount = Array(26).fill(0);

  const alphabets = inputString.toLowerCase().match(/[a-z]/g);

  if (alphabets === null) return "Not a pangram";

  alphabets.forEach((char) => {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    alphabetCount[index]++;
  });

  if (Math.min(...alphabetCount) == 3) {
    return "Triple pangram!!!";
  }

  if (Math.min(...alphabetCount) == 2) {
    return "Double pangram!!";
  }

  if (Math.min(...alphabetCount) == 1) {
    return "Pangram!";
  }
  return "Not a pangram";
}

const t = input.shift();

for (let i = 0; i < t; i++) {
  console.log(`Case ${i + 1}: ${countAlphabets(input[i])}`);
}

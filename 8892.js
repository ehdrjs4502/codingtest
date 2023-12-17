const fs = require("fs");
let input = fs
  .readFileSync("./input/8892.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

function isPalindrome(word) {
  let result = true;
  for (let i = 0; i < word.length / 2; ++i) {
    if (word[i] !== word[word.length - i - 1]) {
      result = false;
      break;
    }
  }
  return result;
}

for (let i = 0; i < t; i++) {
  const n = input.shift();
  let check = false;
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (isPalindrome(input[j] + input[k])) {
        console.log(input[j] + input[k]);
        check = true;
        break;
      }
      if (isPalindrome(input[k] + input[j])) {
        console.log(input[k] + input[j]);
        check = true;
        break;
      }
    }
    if (check) break;
  }
  input.splice(0, n);
  if (!check) {
    console.log(0);
  }
}

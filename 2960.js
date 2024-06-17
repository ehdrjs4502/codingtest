const fs = require("fs");
const input = fs.readFileSync("./input/2960.txt").toString().split(" ").map(Number);

const arr = [];
let count = 0;

for (let i = 2; i <= input[0]; i++) {
  arr[i] = i;
}

for (let i = 2; i <= input[0]; i++) {
  for (let j = i; j <= input[0]; j += i) {
    if (arr[j] === 0) continue;
    count++;
    arr[j] = 0;
    if (count === input[1]) {
      console.log(j);
      return;
    }
  }
}

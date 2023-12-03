const fs = require("fs");
const input = fs.readFileSync("./input/30700.txt").toString().trim();

const KOREA = "KOREA";
let result = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === KOREA[count]) {
    count++;
    result++;
    if (count === KOREA.length) {
      count = 0;
    }
  }
}

console.log(result);

const fs = require("fs");
const input = fs.readFileSync("./input/2920.txt").toString().trim();

const arr = input.split(" ");
let count = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    count++;
  }
}

if (count === 7) return console.log("ascending");
if (count === 0) return console.log("descending");
return console.log("mixed");

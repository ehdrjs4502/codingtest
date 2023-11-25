const fs = require("fs");
const input = fs.readFileSync("./input/2164.txt").toString().trim();

const arr = Array(Number(input))
  .fill()
  .map((v, i) => i + 1);

while (true) {
  if (arr.length === 1) {
    return console.log(arr[0]);
  }
  arr.shift();
  const shuffle = arr.shift();
  arr.push(shuffle);
}

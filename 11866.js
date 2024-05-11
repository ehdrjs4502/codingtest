const fs = require("fs");
const input = fs.readFileSync("./input/11866.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const arr = Array(n)
  .fill()
  .map((arr, i) => {
    return i + 1;
  });
const result = [];
let count = 1;
while (arr.length) {
  const num = arr.shift();
  if (count % k === 0) {
    result.push(num);
  } else {
    arr.push(num);
  }
  count++;
}

console.log(`<${result.join(", ")}>`);

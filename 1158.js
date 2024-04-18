const fs = require("fs");
const input = fs.readFileSync("./input/1158.txt").toString().trim().split(" ").map(Number);

let [n, k] = input;
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

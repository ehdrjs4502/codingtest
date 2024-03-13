const fs = require("fs");
const input = fs.readFileSync("./input/13410.txt").toString().trim();

const [n, k] = input.split(" ").map(Number);

const arr = [];

for (let i = 1; i <= k; i++) {
  arr.push(
    parseInt(
      String(n * i)
        .split("")
        .reverse()
        .join("")
    )
  );
}

console.log(Math.max(...arr));

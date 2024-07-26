const fs = require("fs");
const input = fs.readFileSync("./input/1358.txt").toString().trim().split("\n");

const [w, h, x, y, p] = input.shift().split(" ").map(Number);
let result = 0;

input.forEach((value) => {
  const [px, py] = value.split(" ").map(Number);
  r = h / 2;
  const d1 = Math.sqrt((px - x) ** 2 + (py - (y + r)) ** 2);
  const d2 = Math.sqrt((px - (x + w)) ** 2 + (py - (y + r)) ** 2);

  if (x <= px && px <= x + w && y <= py && py <= y + w) {
    result++;
  } else if (d1 <= r || d2 <= r) {
    result++;
  }
});

console.log(result);

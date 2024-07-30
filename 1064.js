const fs = require("fs");
const input = fs.readFileSync("./input/1064.txt").toString().trim().split("\n");

const calLength = (a, b, c, d) => {
  return ((a - b) ** 2 + (c - d) ** 2) ** 0.5;
};

const [ax, ay, bx, by, cx, cy] = input[0].split(" ").map(Number);

if ((ax - bx) * (ay - cy) == (ay - by) * (ax - cx)) {
  console.log(-1.0);
  return;
}

const abLength = calLength(ax, bx, ay, by);
const acLength = calLength(ax, cx, ay, cy);
const bcLength = calLength(bx, cx, by, cy);

const length = [abLength + acLength, abLength + bcLength, acLength + bcLength];
const result = (Math.max(...length) - Math.min(...length)) * 2;

console.log(result);

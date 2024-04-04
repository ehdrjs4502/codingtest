const fs = require("fs");
const input = fs
  .readFileSync("./input/4779.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const solution = (num) => {
  if (num == 0) {
    process.stdout.write("-");
    return;
  }
  solution(num - 1);
  process.stdout.write(" ".repeat(3 ** num / 3));
  solution(num - 1);
};

input.forEach((num) => {
  solution(+num);
  process.stdout.write("\n");
});

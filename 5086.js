const fs = require("fs");
const input = fs.readFileSync("./input/5086.txt").toString().trim().split("\n");

input.pop();

input.map((item) => {
  const [a, b] = item.split(" ").map(Number);
  if (b % a === 0) return console.log("factor");
  if (a % b === 0) return console.log("multiple");
  console.log("neither");
});

const fs = require("fs");
const input = fs.readFileSync("./input/10951.txt").toString().trim().split("\n");

input.map((item) => {
  const [a, b] = item.split(" ");
  console.log(Number(a) + Number(b));
});

const fs = require("fs");
const input = fs.readFileSync("./input/26069.txt").toString().trim().split("\n");

input.shift();

const set = new Set();
const danceMaster = "ChongChong";
set.add(danceMaster);
input.map((item) => {
  const [a, b] = item.split(" ");
  if (set.has(a) || set.has(b)) {
    set.add(a);
    set.add(b);
  }
});

console.log(set.size);

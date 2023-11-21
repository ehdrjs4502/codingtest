const fs = require("fs");
const input = fs.readFileSync("./input/10810.txt").toString().trim().split("\n");

const N = input.shift().split(" ")[0];
const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(0);
}

input.map((item) => {
  const [i, j, k] = item.split(" ");
  for (let n = i - 1; n <= j - 1; n++) {
    arr[n] = Number(k);
  }
});

console.log(arr.join(" "));

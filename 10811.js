const fs = require("fs");
const input = fs.readFileSync("./input/10811.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(i));
}

input.map((item) => {
  let [i, j] = item.split(" ").map(Number);
  if (i === j) return;
  for (let n = i; n < j; n++) {
    const temp = arr[n - 1];
    arr[n - 1] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
});

console.log(arr.join(" "));

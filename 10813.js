const fs = require("fs");
const input = fs.readFileSync("./input/10813.txt").toString().trim().split("\n");

const N = input.shift().split(" ")[0];
const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}

input.map((item) => {
  const [i, j] = item.split(" ");
  const changeNum1 = arr[i - 1];
  const changeNum2 = arr[j - 1];
  arr[i - 1] = changeNum2;
  arr[j - 1] = changeNum1;
});

console.log(arr.join(" "));

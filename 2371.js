const fs = require("fs");
const input = fs
  .readFileSync("./input/2371.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());
let arr = input.map((value) => {
  return value.split(" ").slice(0, -1);
});

arr.sort((a, b) => a.length - b.length);

// 가장 작은 파일의 길이
let k = arr[0].length;

while (k <= arr[arr.length - 1].length) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    let files = arr[i].slice(0, k).join("");

    if (k > files.length) {
      files = files + "0".repeat(k - files.length);
    }

    if (!set.has(files)) {
      set.add(files);
    } else {
      k++;
      break;
    }
  }

  if (set.size == n) {
    break;
  }
}

console.log(k);

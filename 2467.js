const fs = require("fs");
const input = fs
  .readFileSync("./input/2467.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input.shift().split(" ").map(Number);
let sum = Math.abs(arr[0] + arr[n - 1]);
let resultStart = 0;
let resultEnd = n - 1;

for (let i = 0; i < n; i++) {
  let a = arr[i];
  let start = i + 1;
  let end = n - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    let tmp = a + arr[mid];
    if (Math.abs(tmp) < sum) {
      sum = Math.abs(tmp);
      resultStart = i;
      resultEnd = mid;
    }
    if (sum == 0) {
      break;
    } else if (tmp < 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
}
console.log(arr[resultStart], arr[resultEnd]);

// const n = input.shift();
// const arr = input.shift().split(" ").map(Number);
// let start = 0;
// let end = n - 1;
// let sum = Math.abs(arr[start] + arr[end]);
// let resultStart = start;
// let resultEnd = end;

// while (start < end) {
//   let tmp = arr[start] + arr[end];
//   if (Math.abs(tmp) < sum) {
//     sum = Math.abs(tmp);
//     resultStart = start;
//     resultEnd = end;
//   }
//   if (sum == 0) {
//     break;
//   } else if (tmp < 0) {
//     start++;
//   } else {``
//     end--;
//   }
// }

// console.log(arr[resultStart], arr[resultEnd]);

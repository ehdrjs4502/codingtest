const input = require("fs").readFileSync("./input/1590.txt").toString().trim().split("\n");

const binarySearch = (arr, T) => {
  let start = 0;
  let end = arr.length - 1;
  let target = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= T) {
      target = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return target;
};

const [N, T] = input.shift().split(" ").map(Number);
const result = [];

for (let i = 0; i < N; i++) {
  const [S, I, C] = input.shift().split(" ").map(Number);
  const time = [];
  for (let index = 0; index < C; index++) {
    time.push(S + I * index);
  }

  if (time[time.length - 1] < T) continue;

  const idx = binarySearch(time, T);
  result.push(time[idx] - T);
}

if (result.length) {
  console.log(Math.min(...result));
} else {
  console.log(-1);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = Array.from({ length: 100001 }).fill(0);
const result = [];
let count = 0;
let isFirstLine = true;

rl.on("line", (line) => {
  if (isFirstLine) {
    isFirstLine = false;
    return; // 첫 번째 줄은 건너뜁니다.
  }
  let num = parseFloat(line.trim()) * 1000;
  arr[num] += 1;
});

rl.on("close", () => {
  for (let i = 0; i < arr.length; i++) {
    if (count == 7) break;
    if (arr[i] !== 0) {
      for (let j = 0; j < arr[i]; j++) {
        if (count == 7) break;
        result.push((i / 1000).toFixed(3));
        count++;
      }
    }
  }
  console.log(result.join("\n"));
  process.exit();
});

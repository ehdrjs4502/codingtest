const readline = require("./input.7795.txt");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = parseInt(input[0]);
  let index = 1;
  for (let _ = 0; _ < T; _++) {
    const [n, m] = input[index].split(" ").map(Number);
    const a = input[index + 1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const b = input[index + 2]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    index += 3;

    let count = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
      while (true) {
        if (count === m || a[i] <= b[count]) {
          result += count;
          break;
        } else {
          count++;
        }
      }
    }

    console.log(result);
  }
  process.exit();
});

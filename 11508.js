const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./input/11508.txt"),
  output: process.stdout,
  terminal: false,
});

let input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  input.shift();
  const arr = input.map(Number).sort((a, b) => b - a);
  let set = [];
  let result = 0;

  arr.forEach((value) => {
    set.push(value);
    result += value;
    if (set.length === 3) {
      result -= Math.min(...set);
      set = [];
    }
  });

  console.log(result);
});

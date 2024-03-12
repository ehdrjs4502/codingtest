const fs = require("fs");
const input = fs.readFileSync("./input/10820.txt").toString().split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  let arr = [0, 0, 0, 0];
  if (input[i] === "") continue;
  for (let str of input[i]) {
    if (/[a-z]/.test(str)) {
      arr[0]++;
    } else if (/[A-Z]/.test(str)) {
      arr[1]++;
    } else if (/[0-9]/.test(str)) {
      arr[2]++;
    } else if (/[ ]/g.test(str)) {
      arr[3]++;
    }
  }

  result.push(arr.join(" "));
}

console.log(result.join("\n"));

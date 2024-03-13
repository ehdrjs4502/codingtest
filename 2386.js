const fs = require("fs");
const input = fs
  .readFileSync("./input/2386.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();
const result = [];

input.map((value) => {
  const target = value[0];
  const str = value.slice(2);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === target) {
      count++;
    }
  }

  result.push(`${target} ${count}`);
});

console.log(result.join("\n"));

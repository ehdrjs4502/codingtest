const fs = require("fs");
const input = fs
  .readFileSync("./input/11292.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

while (true) {
  let n = Number(input.shift());
  if (n == 0) break;
  const arr = [];
  const result = [];
  let max = 0;
  for (let i = 0; i < n; i++) {
    const value = input.shift().split(" ");
    const name = value[0];
    const tall = Number(value[1]);
    if (tall > max) max = tall;
    arr.push(`${name} ${tall}`);
  }

  arr.forEach((value) => {
    const [name, tall] = value.split(" ");
    if (tall == max) {
      result.push(name);
    }
  });

  console.log(result.join(" "));
}

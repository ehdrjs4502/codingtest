const fs = require("fs");
const input = fs
  .readFileSync("./input/25329.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();

input.map((value) => {
  const [time, name] = value.split(" ");
  const [h, m] = time.split(":");
  map.set(name, map.get(name) + h * 60 + Number(m) || h * 60 + Number(m));
});

const arr = [...map].map((value) => {
  if (value[1] <= 100) {
    return [value[0], 10];
  } else {
    const addition = Math.ceil((value[1] - 100) / 50);
    return [value[0], 10 + addition * 3];
  }
});

arr.sort((a, b) => {
  if (b[1] == a[1]) return a[0].localeCompare(b[0]);
  return b[1] - a[1];
});

console.log(
  arr
    .map((value) => {
      return `${value[0]} ${value[1]}`;
    })
    .join("\n")
);

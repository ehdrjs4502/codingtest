const fs = require("fs");
const input = fs
  .readFileSync("./input/26596.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();
const result = [];

input.map((value) => {
  const name = value.split(" ")[0];
  const count = Number(value.split(" ")[1]);
  map.set(name, map.get(name) ? map.get(name) + count : count);
});

const values = Array.from(map.values());
const arr = values.map((value) => Math.floor(value * 1.618));

// 조건을 만족하는지 확인
let isDelicious = false;
for (let i = 0; i < values.length; i++) {
  for (let j = i + 1; j < values.length; j++) {
    if (arr[i] === values[j] || arr[j] === values[i]) {
      isDelicious = true;
      break;
    }
  }
  if (isDelicious) {
    break;
  }
}

if (isDelicious) {
  console.log("Delicious!");
} else {
  console.log("Not Delicious...");
}

const fs = require("fs");
const input = fs
  .readFileSync("./input/9322.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const map = new Map();
  const n = input.shift();
  const publicKey1 = input.shift().split(" ");
  const publicKey2 = input.shift().split(" ");
  const cipherText = input.shift().split(" ");
  const result = [];

  publicKey1.map((value, idx) => {
    map.set(idx, publicKey2.indexOf(value));
  });

  for (let j = 0; j < n; j++) {
    result.push(cipherText[map.get(j)]);
  }

  console.log(result.join(" "));
}

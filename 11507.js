const fs = require("fs");
const input = fs.readFileSync("./input/11507.txt").toString().trim();

const arr = [];

const shapeMap = new Map([
  ["P", 0],
  ["K", 0],
  ["H", 0],
  ["T", 0],
]);

const cardMap = new Map();

let isGRESKA = false;
let result = [];

for (let i = 0; i < input.length; i += 3) {
  arr.push(input.slice(i, i + 3));
}

arr.map((value) => {
  const shape = value[0];
  shapeMap.set(shape, shapeMap.get(shape) + 1);
  if (cardMap.has(value)) {
    return (isGRESKA = true);
  } else {
    cardMap.set(value, 1);
  }
});

for (const value of shapeMap.values()) {
  result.push(13 - value);
}

console.log(isGRESKA ? "GRESKA" : result.join(" "));

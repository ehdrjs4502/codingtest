const fs = require("fs");
const input = fs.readFileSync("./input/11652.txt").toString().trim().split("\n");

input.shift();

const map = new Map();

let max = 1;

// 2**62은 BigInt로 감당해야함 Number는 2**52-1까지 감당 가능
const arr = input.map(BigInt);

arr.map((num) => {
  if (map.has(num)) {
    let count = map.get(num);
    count++;
    if (max < count) {
      max = count;
    }
    map.set(num, count);
  } else {
    map.set(num, 1);
  }
});

const mapToArray = [...map];

const result = [];

mapToArray.map((value) => {
  value[1] === max && result.push(value[0]);
});

console.log(String(result.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0]));

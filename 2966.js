const fs = require("fs");
const input = fs
  .readFileSync("./input/2966.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const Adrian = "ABC".repeat(n);
const Bruno = "BABC".repeat(n);
const Goran = "CCAABB".repeat(n);

const obj = {
  Adrian: 0,
  Bruno: 0,
  Goran: 0,
};

for (let i = 0; i < input[0].length; i++) {
  if (input[0][i] === Adrian[i]) {
    obj.Adrian++;
  }
  if (input[0][i] === Bruno[i]) {
    obj.Bruno++;
  }
  if (input[0][i] === Goran[i]) {
    obj.Goran++;
  }
}

const max = Math.max(...Object.values(obj));
const result = [];
for (const key in obj) {
  if (obj[key] === max) {
    result.push(key);
  }
}

console.log(max);
console.log(result.join("\n"));

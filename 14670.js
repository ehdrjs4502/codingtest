const fs = require("fs");
const input = fs
  .readFileSync("./input/14670.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const medicineMap = new Map();
const result = [];

for (let i = 0; i < n; i++) {
  const [effect, name] = input.shift().split(" ");
  medicineMap.set(effect, name);
}

input.shift();

input.map((value) => {
  const symptoms = value.split(" ");
  const n = symptoms.shift();
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(medicineMap.get(symptoms[i]));
  }
  if (n == arr.filter((value) => value === undefined).length) {
    result.push("YOU DIED");
  } else {
    result.push(arr.filter((value) => value !== undefined).join(" "));
  }
});

console.log(result.join("\n"));

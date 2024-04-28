const fs = require("fs");
const input = fs
  .readFileSync("./input/1244.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const switchs = input
  .shift()
  .split(" ")
  .map((value) => (value == 1 ? true : false));
const studentCount = input.shift();
const students = input;
const result = [];

for (let i = 0; i < studentCount; i++) {
  const [gender, num] = students[i].split(" ").map(Number);
  if (gender === 1) {
    for (let j = 0; j < switchs.length; j++) {
      if ((j + 1) % num === 0) {
        switchs[j] = !switchs[j];
      }
    }
  }

  if (gender === 2) {
    let left = num - 2;
    let right = num;
    switchs[num - 1] = !switchs[num - 1];
    while (switchs[left] == switchs[right]) {
      switchs[left] = !switchs[left];
      switchs[right] = !switchs[right];
      left--;
      right++;
    }
  }
}

while (switchs.length > 0) {
  result.push(
    switchs
      .splice(0, 20)
      .map((value) => (value ? 1 : 0))
      .join(" ")
  );
}
console.log(result.join("\n"));

const fs = require("fs");
const input = fs.readFileSync("./input/12927.txt").toString().trim();

if (input.split("").every((value) => value === "N")) return console.log(0);

let arr = input.split("");
let result = 0;
arr.splice(0, 0, "N");

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === "Y") {
    for (let j = i; j < arr.length; j += i) {
      if (arr[j] === "Y") {
        arr[j] = "N";
      } else {
        arr[j] = "Y";
      }
    }
    result++;
  }
}

console.log(result);

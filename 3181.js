const fs = require("fs");
const input = fs.readFileSync("./input/3181.txt").toString().trim().split(" ");

const arr = [input.shift()];
const no = ["i", "pa", "te", "ni", "niti", "a", "ali", "nego", "no", "ili"];
let result = "";

for (let i = 0; i < input.length; i++) {
  let isNo = false;

  no.map((value) => {
    if (value === input[i]) isNo = true;
  });

  if (!isNo) arr.push(input[i]);
}

arr.map((value) => (result += value[0].toUpperCase()));

console.log(result);

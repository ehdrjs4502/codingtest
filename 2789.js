const fs = require("fs");
const input = fs.readFileSync("./input/2789.txt").toString().trim();

const CAMBRIDGE = "CAMBRIDGE";
let result = "";

for (let i = 0; i < input.length; i++) {
  if (CAMBRIDGE.indexOf(input[i]) === -1) {
    result += input[i];
  }
}

console.log(result);

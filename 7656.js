const fs = require("fs");
const input = fs.readFileSync("./input/7656.txt").toString().trim();

const regQuestion = /What is [^?]*\?/g;
const answer = input.match(regQuestion);

const result = answer.map((value) => {
  return value.replace("What", "Forty-two").replace("?", ".");
});

console.log(result.join("\n"));

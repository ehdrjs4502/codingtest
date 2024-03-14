const fs = require("fs");
const input = fs.readFileSync("./input/13235.txt").toString().trim();

console.log(input === input.split("").reverse().join(""));

const fs = require("fs");
const input = fs.readFileSync("./input/10988.txt").toString().trim();

const reverseStr = input.split("").reverse().join("");

console.log(input === reverseStr ? 1 : 0);

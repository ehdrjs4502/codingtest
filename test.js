const fs = require("fs");
const input = fs.readFileSync("./input/test.txt").toString().trim();

const year = Number(input);

console.log((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? '1' : '0')
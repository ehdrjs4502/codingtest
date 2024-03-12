const fs = require("fs");
const input = fs.readFileSync("./input/1550.txt").toString().trim();

console.log(parseInt(input, 16));

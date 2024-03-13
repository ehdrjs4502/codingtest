const fs = require("fs");
const input = fs.readFileSync("./input/10829.txt").toString().trim();

console.log(Number(input).toString(2));

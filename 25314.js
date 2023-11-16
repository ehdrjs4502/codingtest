const fs = require("fs");
const input = fs.readFileSync("./input/25314.txt").toString().trim();

console.log("long ".repeat(Number(input) / 4) + "int");

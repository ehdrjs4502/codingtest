const fs = require("fs");
const input = fs.readFileSync("./input/9655.txt").toString().trim();

console.log(input % 2 === 0 ? "CY" : "SK");

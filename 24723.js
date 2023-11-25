const fs = require("fs");
const input = fs.readFileSync("./input/24723.txt").toString().trim();

console.log(2 ** input);

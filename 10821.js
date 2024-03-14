const fs = require("fs");
const input = fs.readFileSync("./input/10821.txt").toString().trim();

console.log(input.split(",").length);

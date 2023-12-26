const fs = require("fs");
const [n, b] = fs.readFileSync("./input/2745.txt").toString().trim().split(" ");

console.log(parseInt(n, b));

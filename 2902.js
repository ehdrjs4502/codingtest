const fs = require("fs");
const input = fs.readFileSync("./input/2902.txt").toString().trim();

let result = "";
input.split("-").map((value) => (result += value[0]));
console.log(result);

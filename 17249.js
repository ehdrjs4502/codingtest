const fs = require("fs");
const input = fs.readFileSync("./input/17249.txt").toString().trim();

let [left, right] = input.split("(^0^)");

console.log(left.length - left.replaceAll("@", "").length, right.length - right.replaceAll("@", "").length);

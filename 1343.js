const fs = require("fs");
const input = fs
  .readFileSync("./input/1343.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let replaceStr = input[0];
replaceStr = replaceStr.replace(/XXXX/g, "AAAA");
replaceStr = replaceStr.replace(/XX/g, "BB");

console.log(replaceStr.includes("X") ? "-1" : replaceStr);

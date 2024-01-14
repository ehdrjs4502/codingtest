const fs = require("fs");
const input = fs.readFileSync("./input/10769.txt").toString().trim();

const sadReg = /:-\(/g;
const smileReg = /:-\)/g;

const sadCount = input.match(sadReg)?.length || 0;
const smileCount = input.match(smileReg)?.length || 0;

if (sadCount + smileCount === 0) return console.log("none");

if (sadCount === smileCount) return console.log("unsure");

console.log(smileCount > sadCount ? "happy" : "sad");

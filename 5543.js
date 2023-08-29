const fs = require('fs');
const input = fs.readFileSync("./input/5543.txt").toString().trim().split("\n");

const burger = Math.min(...[input[0],input[1],input[2]])
const drink = Math.min(...[input[3],input[4]])

console.log(burger + drink - 50)
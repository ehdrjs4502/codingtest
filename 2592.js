const fs = require('fs');
const input = fs.readFileSync("./input/2592.txt").toString().trim().split("\n");

const obj = {};

input.forEach((x) => { 
  obj[x] = (obj[x] || 0)+1; 
});

const max = (Math.max(...Object.values(obj)));

const avg = input.reduce((a, b) => {
    return Number(a) + Number(b);
}) / input.length;

const lowest = Object.keys(obj).find(key => obj[key] === max)

console.log(avg + '\n' + lowest);

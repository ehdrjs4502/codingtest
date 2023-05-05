const fs = require('fs');
const input = fs.readFileSync("./input/11047.txt").toString().trim().split("\n");

let k = input[0].split(" ")[1];
input.shift();
let moneys = input.map((x) => Number(x));

console.log(k);
console.log(moneys);
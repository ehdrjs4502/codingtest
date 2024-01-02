const fs = require("fs");
const input = fs.readFileSync("./input/2864.txt").toString().trim();

let [a, b] = input.split(" ");

const arr = [];

arr.push(Number(a.replaceAll("5", "6")) + Number(b.replaceAll("5", "6")));
arr.push(Number(a.replaceAll("6", "5")) + Number(b.replaceAll("6", "5")));
arr.push(Number(a) + Number(b));

console.log(Math.min(...arr), Math.max(...arr));

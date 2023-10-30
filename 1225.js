const fs = require("fs");
const input = fs.readFileSync("./input/1225.txt").toString().trim().split(" ");

let [a, b] = input;

const sumA = a.split("").reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

const sumB = b.split("").reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

console.log(sumA * sumB);

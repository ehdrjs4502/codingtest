const fs = require("fs");
const input = fs
    .readFileSync("./input/14681.txt")
    .toString()
    .trim()
    .split("\n");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

if (num1 > 0 && num2 > 0) {
    return console.log(1);
}

if (num1 < 0 && num2 > 0) {
    return console.log(2);
}

if (num1 < 0 && num2 < 0) {
    return console.log(3);
}

if (num1 > 0 && num2 < 0) {
    return console.log(4);
}

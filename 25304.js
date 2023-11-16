const fs = require("fs");
const input = fs.readFileSync("./input/25304.txt").toString().trim().split("\n");

const total = Number(input.shift());

input.shift();

let sum = 0;

input.map((item) => {
    const [price, count] = item.split(" ");
    sum += Number(price) * Number(count);
});

console.log(sum === total ? "Yes" : "No");

const fs = require("fs");
const input = fs.readFileSync("./input/1269.txt").toString().trim().split("\n");

input.shift();

const mapA = new Map();
const mapB = new Map();

let result = 0;

input[0].split(" ").map((item) => {
    mapA.set(Number(item), 0);
});

input[1].split(" ").map((item) => {
    mapB.set(Number(item), 0);
});

input[0].split(" ").map((item) => {
    mapB.get(Number(item)) === undefined && result++;
});

input[1].split(" ").map((item) => {
    mapA.get(Number(item)) === undefined && result++;
});

console.log(result);

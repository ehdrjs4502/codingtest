const fs = require("fs");
const input = fs.readFileSync("./input/11651.txt").toString().trim().split("\n");

input.shift();

arr = input.map((item) => item.split(" "));

const sortedArr = arr.sort((x, y) => {
    return x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]; // y값이 같으면 x값으로 정렬
});

let result = "";

sortedArr.map((item) => {
    result += item.join(" ") + "\n";
});

console.log(result);

const fs = require("fs");
const input = fs.readFileSync("./input/11650.txt").toString().trim().split("\n");

input.shift();

arr = input.map((item) => item.split(" "));

const sortedArr = arr.sort((x, y) => {
    return x[0] === y[0] ? x[1] - y[1] : x[0] - y[0]; // x값이 같으면 y값으로 정렬
});

let result = "";

sortedArr.map((item) => {
    result += item.join(" ") + "\n";
});

console.log(result);

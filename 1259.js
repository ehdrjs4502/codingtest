const fs = require("fs");
const input = fs.readFileSync("./input/1259.txt").toString().trim().split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
    const reverseStr = input[i].split("").reverse().join("");
    console.log(input[i] === reverseStr ? "yes" : "no");
}

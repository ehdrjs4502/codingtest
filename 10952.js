const fs = require("fs");
const input = fs.readFileSync("./input/10952.txt").toString().trim().split("\n");

input.pop();

input.map((item) => {
    const [a, b] = item.split(" ");
    console.log(Number(a) + Number(b));
});

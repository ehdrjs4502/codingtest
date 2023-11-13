const fs = require("fs");
const input = fs.readFileSync("./input/10950.txt").toString().trim().split("\n");

input.shift();

input.map((item) => {
    const [A, B] = item.split(" ");

    console.log(Number(A) + Number(B));
});

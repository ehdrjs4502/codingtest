const fs = require("fs");
const input = fs.readFileSync("./input/11022.txt").toString().trim().split("\n");

input.shift();

input.map((item, idx) => {
    const [A, B] = item.split(" ");
    console.log(`Case #${idx + 1}: ${A} + ${B} = ${Number(A) + Number(B)}`);
});

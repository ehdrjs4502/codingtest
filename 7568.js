const fs = require("fs");
const input = fs.readFileSync("./input/7568.txt").toString().trim().split("\n");

const num = input.shift();

const arr = input.map((item) => item.split(" ").map((item) => parseInt(item)));

let result = [];

for (let i = 0; i < num; i++) {
    let grade = 1;
    for (let j = 0; j < num; j++) {
        if (i !== j && arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
            grade++;
        }
    }

    result.push(grade);
}

console.log(result.join(" "));

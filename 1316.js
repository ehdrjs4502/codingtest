const fs = require("fs");
const input = fs.readFileSync("./input/1316.txt").toString().trim().split("\n");

const num = input.shift();
let result = 0;

for (let i = 0; i < num; i++) {
    const words = input[i];
    let arr = [];
    let isGroup = true;
    for (let j = 0; j < words.length; j++) {
        if (arr.indexOf(words[j]) === -1) {
            arr.push(words[j]);
        } else {
            if (arr.indexOf(words[j]) !== arr.length - 1) {
                isGroup = false;
                break;
            }
        }
    }

    isGroup && result++;
}

console.log(result);

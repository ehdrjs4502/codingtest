const fs = require("fs");
const input = fs.readFileSync("./input/8958.txt").toString().trim().split("\n");

const num = input.shift();

for (let i = 0; i < num; i++) {
    let words = input[i];
    let result = 0;
    let score = 0;
    for (let j = 0; j < words.length; j++) {
        if (words[j] == "O") {
            score++;
        } else {
            score = 0;
        }

        result += score;
    }

    console.log(result);
}

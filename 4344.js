const fs = require('fs');
const input = fs.readFileSync("./input/4344.txt").toString().trim().split("\n");

for(let i = 1; i < input.length; i++) {
    const arr = input[i].split(" ");
    const count = arr.shift();
    let good = 0;
    const avg = arr.reduce((a, b) => {
        return Number(a) + Number(b);
    }) / count;

    for(let j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            good++;
        }
    }

    console.log((good/count*100).toFixed(3) + "%");
}
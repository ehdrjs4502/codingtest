    const fs = require('fs');
    const input = fs.readFileSync("./input/11004.txt").toString().trim().split("\n");
    const idx = input[0].split(' ')[1];

    let num = input[1].split(' ').sort((a, b) => {
        return a - b;
    });

    console.log(num[idx - 1]);
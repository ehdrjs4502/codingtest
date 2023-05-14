    const fs = require('fs');
    const input = fs.readFileSync("./input/2744.txt").toString().split('\n');

    let str = input[0];
    let answer = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase();
        } else {
            answer += str[i].toUpperCase();
        }
    }

    console.log(answer);
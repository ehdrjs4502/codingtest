const fs = require('fs');
const input = fs.readFileSync("./input/10809.txt").toString().trim().split("\n");

function solution(input) {
    const str = input[0]
    let arr = [];
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let i = 0; i < alpha.length; i++) {
        arr.push(str.indexOf(alpha[i]));
    }

    return arr.join(' ');
}

console.log(solution(input));
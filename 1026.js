const fs = require('fs');
const input = fs.readFileSync("./input/1026.txt").toString().trim().split("\n");

function solution(input) {
    let arr1 = input[1].split(' ');
    let arr2 = input[2].split(' ');
    let answer = 0;
    
    arr1 = arr1.sort((a, b) => {
        return a - b;
    });

    arr2 = arr2.sort((a, b) => {
        return b - a;
    });

    console.log(arr1, arr2);

    arr1 = arr1.map((x, y) => x * arr2[y]);
    
    answer = arr1.reduce((sum, x) => {
        return sum + x;
    }, 0);

    return answer;
}

console.log(solution(input));
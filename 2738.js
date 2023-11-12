const fs = require("fs");
const input = fs.readFileSync("./input/2738.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

let arr1 = [];
let arr2 = [];
let result = "";

for (let i = 0; i < N; i++) {
    arr1.push(input[i].split(" "));
    arr2.push(input[i + Number(N)].split(" "));
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        result += Number(arr1[i][j]) + Number(arr2[i][j]) + " ";
    }
    result += "\n";
}

console.log(result.trim());

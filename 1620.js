const fs = require("fs");
const input = fs.readFileSync("./input/1620.txt").toString().trim().split("\n");

const [poketmonNum, questionNum] = input.shift().split(" ");

const NumToName = new Map(); // 포켓몬 번호 => 포켓몬 이름
const NameToNum = new Map(); // 포켓몬 이름 => 포켓몬 번호

let result = "";

for (let i = 0; i < Number(poketmonNum); i++) {
    NumToName.set(i + 1, input[i]);
    NameToNum.set(input[i], i + 1);
}

for (let i = input.length - questionNum; i < input.length; i++) {
    if (isNaN(input[i])) {
        result += NameToNum.get(input[i]) + "\n";
    } else {
        result += NumToName.get(Number(input[i])) + "\n";
    }
}

console.log(result);

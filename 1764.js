const fs = require("fs");
const input = fs.readFileSync("./input/1764.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const unHeardSet = new Set(); // 듣도 못한 사람
const unSeeSet = new Set(); // 보도 못한 사람

let result = [];

for (let i = 0; i < input.length; i++) {
    if (i < N) {
        unHeardSet.add(input[i]);
    } else {
        unSeeSet.add(input[i]);
    }
}

unHeardSet.forEach((value) => {
    if (unSeeSet.has(value)) {
        result.push(value);
    }
});

result.sort();
console.log(result.length + "\n" + result.join("\n"));

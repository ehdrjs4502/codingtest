const fs = require("fs");
const input = fs.readFileSync("./input/2884.txt").toString().trim();

let [H, M] = input.split(" ");

if (M - 45 < 0) {
    M = 60 + (M - 45);

    if (H == 0) {
        H = 23;
    } else {
        H--;
    }
} else {
    M = M - 45;
}

console.log(H, M);

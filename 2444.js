const fs = require("fs");
const input = fs.readFileSync("./input/2444.txt").toString().trim();

const n = Number(input);

let str = "";

for (i = 1; i <= n; i++) {
    for (j = 1; j < n + i; j++) {
        if (j <= n - i) {
            str += " ";
        } else {
            str += "*";
        }
    }
    str += "\n";
}

for (i = n; i > 1; i--) {
    for (j = 1; j < n + i - 1; j++) {
        if (j <= n + 1 - i) {
            str += " ";
        } else {
            str += "*";
        }
    }
    str += "\n";
}

console.log(str);

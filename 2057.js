const fs = require("fs");
const input = fs.readFileSync("./input/2057.txt").toString().trim();

let num = BigInt(input);

if (num === 0n) {
  return console.log("NO");
}

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

const facs = new Array();
let idx = 0;
while (BigInt(factorial(idx)) <= num) {
  facs[idx] = BigInt(factorial(idx));
  idx++;
}

for (let i = facs.length; i >= 0; i--) {
  if (num >= facs[i]) {
    num -= facs[i];
  }
}

if (num === 0n) {
  console.log("YES");
} else {
  console.log("NO");
}

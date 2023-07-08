const fs = require('fs');
const input = Number(fs.readFileSync("./input/1436.txt").toString());

let count = 1;
let num = 666;

while (true) {
  if (input === 1) {
    break;
  }

  num++;

  if (String(num).includes('666')) {
    count++;
  }

  if (count === input) {
    break;
  }
}

console.log(num);
const fs = require('fs');
let sugar = fs.readFileSync("./input/2839.txt").toString();
let count = 0;

while(true) {
    if(sugar % 5 === 0) {
        console.log(sugar / 5 + count);
        break;
    }

    if(sugar < 0) {
        console.log(-1);
        break;
    }

    count++;
    sugar -= 3;
}


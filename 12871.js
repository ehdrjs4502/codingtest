const fs = require('fs');
const input = fs.readFileSync("./input/12871.txt").toString().trim().split("\n");

const [a, b] = input;
let resultA = '';
let resultB = '';

let getLCM = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm;
}

const count = getLCM(a.length, b.length);

while(resultA.length !== count){
    resultA += a;
}

while(resultB.length !== count){
    resultB += b;
}

console.log(resultA === resultB ? 1 : 0);
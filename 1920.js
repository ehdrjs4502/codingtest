const fs = require('fs');
const input = fs.readFileSync("./input/1920.txt").toString().trim().split("\n");

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start+end) / 2);

    while(end-start >= 0) {
        if(target == arr[mid]) {
            return 1;
        } else if(arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = Math.floor((start + end) / 2);
   }
   return 0;
}


const A = input[1].split(" ").map(Number).sort((a, b) => {
    return a - b;
});;
const B = input[3].split(" ").map(Number);

let answer = [];

for(let i = 0; i < B.length; i++) {
    answer.push(binarySearch(A, B[i]));
}

console.log(answer.join("\n"));



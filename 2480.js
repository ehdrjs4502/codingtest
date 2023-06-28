const fs = require('fs');
const input = fs.readFileSync("./input/2480.txt").toString().trim();

const arr = input.split(' ').sort((a, b) => {
    return b - a;
})

if(arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
    console.log(arr[0] * 100);
} else if(arr[0] === arr[1] && arr[1] === arr[2]) {
    console.log(10000+arr[0]*1000);
} else if(arr[0] === arr[1] && arr[1] !== arr[2]) {
    console.log(1000+arr[0]*100);
} else if(arr[1] === arr[2] && arr[2] !== arr[0]) {
    console.log(1000+arr[1]*100);
} else if(arr[2] === arr[0] && arr[0] !== arr[1]) {
    console.log(1000+arr[2]*100);
}
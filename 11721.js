const fs = require('fs');
const input = fs.readFileSync("./input/11721.txt").toString().trim()

for(let i = 0; i <= input.length; i+=10) console.log(input.slice(i, i+10))

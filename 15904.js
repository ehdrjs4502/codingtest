const fs = require("fs");
const input = fs.readFileSync("./input/15904.txt").toString().trim();

const reg = /[U].{0,}[C].{0,}[P].{0,}[C]/g; // [U].{0,}는 'U' 다음에 어떤 문자열이든 올 수 있다는 것을 의미

console.log(reg.test(input) ? "I love UCPC" : "I hate UCPC");

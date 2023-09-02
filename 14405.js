const fs = require('fs');
const input = fs.readFileSync("./input/14405.txt").toString().trim()

// 정규식 써서 pi, ka, chu를 모두 찾는다
const regex = /pi|ka|chu/g

// replace 사용해서 pi, ka, chu 찾아 빈 문자열로 만들고 길이가 0이면 YES 아니면 NO
console.log(input.replace(regex,'').length === 0 ? 'YES' : 'NO')
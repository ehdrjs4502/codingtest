const fs = require("fs");
const input = fs.readFileSync("./input/11170.txt").toString().trim().split("\n");

input.shift();

input.map((item) => {
  const [n, m] = item.split(" ").map(Number);
  let result = 0;
  for (let i = n; i <= m; i++) {
    // /0/g를 사용하여 0에 해당하는 모든 부분을 찾고, || [] 을 통해 null 값이면 빈 배열로 변환함
    const zeroCount = (i.toString().match(/0/g) || []).length;
    result += zeroCount;
  }
  console.log(result);
});

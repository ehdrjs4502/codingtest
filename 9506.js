const fs = require("fs");
const input = fs.readFileSync("./input/9506.txt").toString().trim().split("\n");

input.pop();

input.map((item) => {
  item = Number(item);
  const arr = [];
  let sum = 0;
  for (let i = 1; i < item; i++) {
    if (item % i === 0) {
      arr.push(i);
      sum += i;
    }
  }
  sum === item ? console.log(`${item} = ${arr.join(" + ")}`) : console.log(`${item} is NOT perfect.`);
});

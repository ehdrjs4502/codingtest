const fs = require("fs");
const input = fs
  .readFileSync("./input/5046.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let [n, amount, hotels, week] = input.shift().split(" ").map(Number);
let result = 500001;

for (let i = 0; i < hotels; i++) {
  let price = +input.shift();
  const rooms = input.shift().split(" ").map(Number);
  rooms.forEach((room) => {
    if (room >= n) {
      result = Math.min(result, price * n);
    }
  });
}

console.log(result <= amount ? result : "stay home");

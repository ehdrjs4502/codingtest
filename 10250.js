const fs = require("fs");
const input = fs
  .readFileSync("./input/10250.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

for (let i = 0; i < n; i++) {
  let [h, w, n] = input.shift().split(" ").map(Number);
  const hotel = Array.from(Array(h + 1), () => new Array(w + 1));
  for (let j = 1; j <= h; j++) {
    for (let k = 1; k <= w; k++) {
      hotel[j][k] = j + k.toString().padStart(2, "0");
    }
  }
  for (let i = 1; i <= w; i++) {
    for (let j = 1; j <= h; j++) {
      n--;
      if (n === 0) {
        console.log(hotel[j][i]);
        break;
      }
    }
  }
}

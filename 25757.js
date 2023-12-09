const fs = require("fs");
const input = fs.readFileSync("./input/25757.txt").toString().trim().split("\n");

const [n, game] = input.shift().split(" ");
const map = new Map();

input.map((value) => {
  map.set(value, 0);
});

if (game === "Y\r") {
  return console.log(Math.floor(map.size));
}

if (game === "F\r") {
  return console.log(Math.floor((result = map.size / 2)));
}

if (game === "O\r") {
  return console.log(Math.floor((result = map.size / 3)));
}

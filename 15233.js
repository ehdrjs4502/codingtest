const fs = require("fs");
const input = fs
  .readFileSync("./input/15233.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const players = new Map();
let A = 0;
let B = 0;

input[0].split(" ").map((player) => {
  players.set(player, "A");
});

input[1].split(" ").map((player) => {
  players.set(player, "B");
});

if (input[2] === undefined) {
  return console.log("TIE");
}

input[2].split(" ").map((player) => {
  players.get(player) == "A" ? A++ : B++;
});

if (A > B) {
  return console.log("A");
}

if (A < B) {
  return console.log("B");
}

if (A === B) {
  return console.log("TIE");
}

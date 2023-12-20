const fs = require("fs");
let input = fs.readFileSync("./input/4378.txt").toString().trim();

const map = new Map([
  ["=", "-"],
  ["-", "0"],
  ["0", "9"],
  ["9", "8"],
  ["8", "7"],
  ["7", "6"],
  ["6", "5"],
  ["5", "4"],
  ["4", "3"],
  ["3", "2"],
  ["2", "1"],
  ["1", "`"],
  ["\\", "]"],
  ["]", "["],
  ["[", "P"],
  ["P", "O"],
  ["O", "I"],
  ["I", "U"],
  ["U", "Y"],
  ["Y", "T"],
  ["T", "R"],
  ["R", "E"],
  ["E", "W"],
  ["W", "Q"],
  ["'", ";"],
  [";", "L"],
  ["L", "K"],
  ["K", "J"],
  ["J", "H"],
  ["H", "G"],
  ["G", "F"],
  ["F", "D"],
  ["D", "S"],
  ["S", "A"],
  ["/", "."],
  [".", ","],
  [",", "M"],
  ["M", "N"],
  ["N", "B"],
  ["B", "V"],
  ["V", "C"],
  ["C", "X"],
  ["X", "Z"],
  [" ", " "],
]);

input = input.split("\n");

for (let i = 0; i < input.length; i++) {
  const result = [];
  input[i].split("").map((value) => {
    result.push(map.get(value));
  });
  console.log(result.join(""));
}

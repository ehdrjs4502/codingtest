const fs = require("fs");
const input = fs.readFileSync("./input/27930.txt").toString().trim();

const KOREA = ["K", "O", "R", "E", "A"];
const YONSEI = ["Y", "O", "N", "S", "E", "I"];

for (const char of input) {
  if (char === KOREA[0]) {
    KOREA.shift();

    if (KOREA.length === 0) {
      return console.log("KOREA");
    }
  }

  if (char === YONSEI[0]) {
    YONSEI.shift();

    if (YONSEI.length === 0) {
      return console.log("YONSEI");
    }
  }
}

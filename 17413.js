const fs = require("fs");
const input = fs.readFileSync("./input/17413.txt").toString().trim();

let tagStack = [];
let strStack = [];
let result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] == "<") {
    tagStack.push(input[i]);
  } else if (tagStack.length !== 0) {
    tagStack.push(input[i]);
  } else {
    if (input[i] == " ") {
      result.push(input[i]);
      i++;
    }
    strStack.push(input[i]);
    if (input[i + 1] == " " || input[i + 1] == "<" || i + 1 == input.length) {
      result.push(strStack.reverse());
      strStack = [];
    }
  }

  if (input[i] == ">") {
    result.push(tagStack);
    tagStack = [];
  }
}

console.log(result.flat().join(""));

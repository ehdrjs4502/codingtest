const fs = require("fs");
const input = fs.readFileSync("./input/25325.txt").toString().trim().split("\n");

input.shift();
const students = input.shift().split(" ");
const result = [];
const topRankMap = new Map();

students.map((name) => {
  topRankMap.set(name, 0);
});

input.map((valaue) => {
  valaue.split(" ").map((name) => {
    topRankMap.set(name, topRankMap.get(name) + 1);
  });
});

const mapToArray = Array(...topRankMap);

mapToArray.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0].localeCompare(b[0]);
  }

  return b[1] - a[1];
});

mapToArray.map((value) => {
  result.push(value.join(" "));
});

console.log(result.join("\n"));

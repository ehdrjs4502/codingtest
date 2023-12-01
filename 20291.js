const fs = require("fs");
const input = fs.readFileSync("./input/20291.txt").toString().trim().split("\n");

input.shift();

const map = new Map();

input.map((value) => {
  const extenction = value.split(".")[1];

  if (map.has(extenction)) {
    let count = map.get(extenction);
    count++;
    map.set(extenction, count);
  } else {
    map.set(extenction, 1);
  }
});

const mapToArray = Array(...map);

mapToArray.sort((a, b) => a[0].localeCompare(b[0]));

console.log(mapToArray.flat().join(" "));

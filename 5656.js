const fs = require("fs");
const input = fs
  .readFileSync("./input/5656.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

input.map((value, idx) => {
  const [left, comp, right] = value.split(" ");
  if (comp === ">") {
    console.log(`Case ${idx + 1}: ${Number(left) > Number(right)}`);
  } else if (comp === ">=") {
    console.log(`Case ${idx + 1}: ${Number(left) >= Number(right)}`);
  } else if (comp === "<") {
    console.log(`Case ${idx + 1}: ${Number(left) < Number(right)}`);
  } else if (comp === "<=") {
    console.log(`Case ${idx + 1}: ${Number(left) <= Number(right)}`);
  } else if (comp === "==") {
    console.log(`Case ${idx + 1}: ${Number(left) == Number(right)}`);
  } else if (comp === "!=") {
    console.log(`Case ${idx + 1}: ${Number(left) != Number(right)}`);
  }
});

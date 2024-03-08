const fs = require("fs");
const input = fs
  .readFileSync("./input/14612.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
let order = [];
let result = [];

input.forEach((ele) => {
  ele = ele.split(" ");
  if (ele[0] === "order") {
    order.push([ele[1], ele[2]].map(Number));
    result.push(order.map((v) => v[0]));
  }

  if (ele[0] === "sort") {
    if (order.length === 0) {
      result.push("sleep");
    } else {
      order.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        } else {
          return a[1] - b[1];
        }
      });
      result.push(order.map((v) => v[0]));
    }
  }

  if (ele[0] === "complete") {
    order = order.filter((v) => v[0] != ele[1]);
    result.push(order.length ? order.map((v) => v[0]) : "sleep");
  }
});

console.log(result.map((v) => (Array.isArray(v) ? v.join(" ") : v)).join("\n"));

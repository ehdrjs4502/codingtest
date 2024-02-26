const fs = require("fs");
const input = fs
  .readFileSync("./input/17479.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const addMenu = (menu, num) => {
  for (let i = 0; i < num; i++) {
    const [name, price] = input.shift().split(" ");
    menu.set(name, +price);
  }
};

const [a, b, c] = input.shift().split(" ").map(Number);

const menu = {
  regularMenu: new Map(),
  specialMenu: new Map(),
  serviceMenu: new Map(),
};

for (let i = 0; i < a; i++) {
  const [name, price] = input[i].split(" ");
  menu.regularMenu.set(name, +price);
}

for (let i = a; i < a + b; i++) {
  const [name, price] = input[i].split(" ");
  menu.specialMenu.set(name, +price);
}

for (let i = a + b; i < a + b + c; i++) {
  const [name, price] = input[i].split(" ");
  menu.serviceMenu.set(name, +price);
}

const n = Number(a + b + c);
let regularPrice = 0;
let specialPrice = 0;
let isSpecialOrder = false;
let isServiceOrder = false;
let serviceOrderCnt = 0;

for (let i = n + 1; i <= n + Number(input[a + b + c]); i++) {
  const order = input[i];
  if (menu.regularMenu.has(order)) {
    regularPrice += menu.regularMenu.get(order);
  } else if (menu.specialMenu.has(order)) {
    specialPrice += menu.specialMenu.get(order);
    isSpecialOrder = true;
  } else if (menu.serviceMenu.has(order)) {
    isServiceOrder = true;
    serviceOrderCnt++;
  }
}

// 주문한 일반 메뉴 2만원 이하인데 스페셜 메뉴 시켰을때
if (regularPrice < 20000 && isSpecialOrder) {
  return console.log("No");
}

// 주문한 일반 메뉴 + 특별 메뉴 5만원 이하인데 서비스 시켰을때
if (regularPrice + specialPrice < 50000 && isServiceOrder) {
  return console.log("No");
}

// 서비스 메뉴 2개 이상 시켰을때
if (serviceOrderCnt > 1) {
  return console.log("No");
}

console.log("Okay");

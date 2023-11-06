const fs = require("fs");
const input = fs.readFileSync("./input/10816.txt").toString().trim().split("\n");

const cards = input[1].split(" ");
const matchCards = input[3].split(" ");

let map = new Map();

let result = [];

for (let i = 0; i < cards.length; i++) {
    map.has(cards[i]) ? map.set(cards[i], map.get(cards[i]) + 1) : map.set(cards[i], 1);
}

for (let i = 0; i < matchCards.length; i++) {
    map.has(matchCards[i]) ? result.push(map.get(matchCards[i])) : result.push(0);
}

console.log(result.join(" "));

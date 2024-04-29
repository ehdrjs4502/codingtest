const fs = require("fs");
const input = fs.readFileSync("./input/10816.txt").toString().trim().split("\n");

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (end - start >= 0) {
    if (target == arr[mid]) {
      return useCardCount.get(target);
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  return 0;
}

const useCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const cards = input[3].split(" ").map(Number);
const useCardCount = new Map();
const result = [];

for (let i = 0; i < useCards.length; i++) {
  useCardCount.set(useCards[i], (useCardCount.get(useCards[i]) || 0) + 1);
}

for (let i = 0; i < cards.length; i++) {
  result.push(binarySearch(useCards, cards[i]));
}

console.log(result.join(" "));

// const cards = input[1].split(" ");
// const matchCards = input[3].split(" ");

// let map = new Map();

// let result = [];

// for (let i = 0; i < cards.length; i++) {
//     map.has(cards[i]) ? map.set(cards[i], map.get(cards[i]) + 1) : map.set(cards[i], 1);
// }

// for (let i = 0; i < matchCards.length; i++) {
//     map.has(matchCards[i]) ? result.push(map.get(matchCards[i])) : result.push(0);
// }

// console.log(result.join(" "));

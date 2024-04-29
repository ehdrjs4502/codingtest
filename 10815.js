const fs = require("fs");
const input = fs.readFileSync("./input/10815.txt").toString().trim().split("\n");

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (end - start >= 0) {
    if (target == arr[mid]) {
      return 1;
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
const result = [];

for (let card of cards) {
  result.push(binarySearch(useCards, card));
}

console.log(result.join(" "));

// const [N, M] = [Number(input[0]), Number(input[2])];

// //상근이가 가지고 있는 카드 set에 저장
// const [myCards,cards] = [new Set(input[1].split(' ').map(Number)),input[3].split(' ').map(Number)]

// let result = ''

// // 상근이가 가지고 있는 카드 중 찾는 카드가 있는 지 확인해서 있으면 1 없으면 0
// for(let i = 0; i < M; i++) {
//     myCards.has(cards[i]) === true ? result += 1 + ' ' : result += 0 + ' '
// }

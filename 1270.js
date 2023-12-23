const fs = require("fs");
const input = fs
  .readFileSync("./input/1270.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const boyerMooreMajority = (arr, len) => {
  let count = 0; //과반수 원소 후보가 실질적으로 몇개 있는가?
  let major = 0; //과반수 원소 후보의 번호
  for (ele of arr) {
    if (count === 0) {
      // 후보가 실질적으로 0번 등장했다면
      major = ele; // 후보 교체
    }
    if (major == ele) {
      // 후보가 등장하면
      count += 1;
    } else {
      count -= 1;
    }
  }

  // 후보의 수
  let m = 0;
  for (ele of arr) {
    if (ele === major) {
      m += 1;
    }
  }

  // 후보가 과반수 넘는지 확인
  if (m > len / 2) {
    return major;
  } else {
    return "SYJKGW";
  }
};

input.shift();

let result = [];

input.map((value) => {
  const arr = value.split(" ");
  const len = arr.shift();
  result.push(boyerMooreMajority(arr, len));
});

console.log(result.join("\n"));

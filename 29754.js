const fs = require("fs");
const input = fs
  .readFileSync("./input/29754.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function getTime(start, end) {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const totalMinutes = (endHour - startHour) * 60 + (endMinute - startMinute);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Number((totalMinutes % 60) / 60);

  return hours + minutes;
}

const [n, m] = input.shift().split(" ").map(Number);
const map = new Map();
const realVtuber = new Map();
const result = [];

input.sort((a, b) => {
  return a.split(" ")[1] - b.split(" ")[1];
});

for (let i = 0; i < n; i++) {
  const [name, day, start, end] = input[i].split(" ");
  // 이미 Map에 있으면 방송 횟수랑 시간 증가
  if (map.has(name)) {
    const val = map.get(name);
    val.count += 1;
    val.time += getTime(start, end);
  } else {
    map.set(name, { count: 1, time: getTime(start, end) });
  }

  // 1주일 지났으면 조건에 맞게 방송 했는지 확인
  if ((day % 7 == 0 && input[i + 1] && input[i + 1].split(" ")[1] % 7 != 0) || i + 1 == n) {
    [...map].map((value) => {
      if (value[1].count >= 5 && value[1].time >= 60) {
        if (realVtuber.has(value[0])) {
          realVtuber.set(value[0], realVtuber.get(value[0]) + 1);
        } else {
          realVtuber.set(value[0], 1);
        }
      }
    });
    map.clear();
  }
}

const week = m / 7;

[...realVtuber].map((value) => {
  if (value[1] == week) {
    result.push(value[0]);
  }
});

console.log(result.length ? result.sort((a, b) => a.localeCompare(b)).join("\n") : -1);

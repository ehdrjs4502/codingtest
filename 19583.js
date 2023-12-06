const fs = require("fs");
const input = fs.readFileSync("./input/19583.txt").toString().trim().split("\n");

const [startMeetingTime, endMeetingTime, endStreamingTime] = input
  .shift()
  .split(" ")
  .map((value) => {
    return Number(value.replace(":", ""));
  });

const attendanceMap = new Map();
let result = 0;

input.map((value) => {
  let [time, name] = value.split(" ");
  time = Number(time.replace(":", ""));
  // 출석한 사람
  if (time <= startMeetingTime) {
    return attendanceMap.set(name, 0);
  }

  // 출석 했으면서 개강총회를 끝내고 나서, 스트리밍을 끝낼 때까지 퇴장한 사람
  if (attendanceMap.has(name) && endMeetingTime <= time && time <= endStreamingTime) {
    return attendanceMap.set(name, 1);
  }
});

attendanceMap.forEach((value, key) => {
  value === 1 && result++;
});

console.log(result);

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./input/15233.txt"),
  output: process.stdout,
  terminal: false,
});

const input = [];

// 파일에서 한 줄씩 읽어옴
rl.on("line", (line) => {
  input.push(line.trim());
});

// 모든 줄을 읽었을 때 실행
rl.on("close", () => {
  // 첫 번째 줄은 사용하지 않으므로 shift를 사용하여 제거
  input.shift();

  const players = new Map();
  let A = 0;
  let B = 0;

  // A 팀 선수들을 맵에 추가
  input[0].split(" ").map((player) => {
    players.set(player, "A");
  });

  // B 팀 선수들을 맵에 추가
  input[1].split(" ").map((player) => {
    players.set(player, "B");
  });

  // 골을 넣은 선수들을 확인하면서 A팀과 B팀의 점수를 계산
  input[2].split(" ").map((goal) => {
    players.get(goal) == "A" ? A++ : B++;
  });

  // A팀이 이긴 경우
  if (A > B) {
    return console.log("A");
  }

  // B팀이 이긴 경우
  if (A < B) {
    return console.log("B");
  }

  // 비긴 경우
  if (A === B) {
    return console.log("TIE");
  }
});

const fs = require("fs");
const input = fs.readFileSync("./input/30676.txt").toString().trim();

function printColor(num) {
  const waveLengthColor = [
    { range: [620, 780], color: "Red" },
    { range: [590, 620], color: "Orange" },
    { range: [570, 590], color: "Yellow" },
    { range: [495, 570], color: "Green" },
    { range: [450, 495], color: "Blue" },
    { range: [425, 450], color: "Indigo" },
    { range: [380, 425], color: "Violet" },
  ];

  const color = waveLengthColor.find(({ range }) => num >= range[0] && num <= range[1]);

  console.log(color.color);
}

printColor(input);

/*
빨간색: 620nm 이상 780nm 이하
주황색: 590nm 이상 620nm 미만
노란색: 570nm 이상 590nm 미만
초록색: 495nm 이상 570nm 미만
파란색: 450nm 이상 495nm 미만
남색: 425nm 이상 450nm 미만
보라색: 380nm 이상 425nm 미만
*/

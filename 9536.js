const fs = require("fs");
const input = fs
  .readFileSync("./input/9536.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const animalSounds = new Map();
  const result = [];
  const recordSounds = input.shift().split(" ");

  while (true) {
    const [name, , sound] = input.shift().split(" ");
    if (name == "what") break;
    animalSounds.set(sound, name);
  }
  recordSounds.map((sound) => {
    if (!animalSounds.get(sound)) {
      result.push(sound);
    }
  });

  console.log(result.join(" "));
}

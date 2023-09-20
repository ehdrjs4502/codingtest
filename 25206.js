const fs = require("fs");
let input = fs.readFileSync("./input/25206.txt").toString().trim().split("\n");

input = input.map((a) => a.split(" "));

let sum = 0;

let creditTotal = 0;
input.filter((credit) => credit[2] !== "P").map((credit) => (creditTotal += parseFloat(credit[1])));

for (let i = 0; i < 20; i++) {
    const subject = input[i];
    if (subject[2] == "A+\r") {
        sum += parseFloat(subject[1]) * 4.5;
    }
    if (subject[2] == "A0\r") {
        sum += parseFloat(subject[1] * 4);
    }
    if (subject[2] == "B+\r") {
        sum += parseFloat(subject[1] * 3.5);
    }
    if (subject[2] == "B0\r") {
        sum += parseFloat(subject[1] * 3);
    }
    if (subject[2] == "C+\r") {
        sum += parseFloat(subject[1] * 2.5);
    }
    if (subject[2] == "C0\r") {
        sum += parseFloat(subject[1] * 2);
    }
    if (subject[2] == "D+\r") {
        sum += parseFloat(subject[1] * 1.5);
    }
    if (subject[2] == "D0\r") {
        sum += parseInt(subject[1] * 1);
    }
    if (subject[2] == "F\r") {
        sum += parseFloat(subject[1] * 0);
    }
}

console.log(sum / creditTotal);

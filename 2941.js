const fs = require("fs");
const input = fs.readFileSync("./input/2941.txt").toString().trim();
/*
č	c=
ć	c-
dž	dz=
đ	d-
lj	lj
nj	nj
š	s=
ž	z=
*/

const reg = /c=|c-|dz=|d-|lj|nj|s=|z=|./g;

console.log(input.replace(reg, "a").length);

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
let time = 0;
const stringToNumber = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
const stringArr = Object.keys(stringToNumber);

for (let i = 0; i < input.length; i++) {
  stringArr.forEach((string) => {
    if (string.includes(input[i])) time += stringToNumber[string];
  });
}
console.log(time);
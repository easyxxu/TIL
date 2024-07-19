const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const reverseAArr = [];
const reverseBArr = [];
for (let i = input[0].length - 1; i >= 0; i--) {
  reverseAArr.push(input[0][i]);
}
for (let i = input[1].length - 1; i >= 0; i--) {
  reverseBArr.push(input[1][i]);
}
const reverseA = parseInt(reverseAArr.join(""));
const reverseB = parseInt(reverseBArr.join(""));

console.log(Math.max(reverseA, reverseB));
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const numbers = input.slice(1);
numbers.sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < numbers.length; i++) {
  answer += numbers[i] + "\n";
}
console.log(answer);

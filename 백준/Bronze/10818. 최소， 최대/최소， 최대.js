const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputLine = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(`${inputLine[0]} ${inputLine[inputLine.length - 1]}`);

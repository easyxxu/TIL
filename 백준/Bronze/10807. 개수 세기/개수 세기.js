const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1]
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));
const number = Number(input[2]);
const result = arr.filter((v) => v === number).length;
console.log(result);

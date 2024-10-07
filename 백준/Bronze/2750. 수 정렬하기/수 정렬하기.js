const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const numbers = input.slice(1);
numbers.sort((a, b) => a - b);
numbers.forEach((number) => console.log(number));

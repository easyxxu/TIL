const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const string = input[0];
const number = input[1];
console.log(string.slice(number - 1, number));
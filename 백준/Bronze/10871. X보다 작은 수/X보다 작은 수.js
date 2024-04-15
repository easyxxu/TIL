const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, x] = input[0].split(" ").map(Number);
const inputLine = input[1].split(" ").map(Number);
const result = inputLine.filter((num) => num < x).join(" ");
console.log(result);

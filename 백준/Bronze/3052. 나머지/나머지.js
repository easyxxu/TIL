const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const remainder = input.map((x) => x % 42);
const result = new Set();
remainder.forEach((x) => result.add(x));
console.log(result.size);

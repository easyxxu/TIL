const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
  input[1]
    .split("")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b)
);

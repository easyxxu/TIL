const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const count = input[0];
for (let i = 1; i <= count; i++) {
  console.log(input[i].slice(0, 1) + input[i].slice(input[i].length - 1));
}

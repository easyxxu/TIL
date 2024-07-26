const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const [a, b, c, d, e, f] = input;

// 연립방정식의 x와 y의 값을 계산하시오
for (let i = -999; i <= 999; i++) {
  for (let k = -999; k <= 999; k++) {
    if (c === a * i + b * k && f === d * i + e * k) console.log(i, k);
  }
}

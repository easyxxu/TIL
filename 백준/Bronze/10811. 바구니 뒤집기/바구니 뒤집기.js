const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ");
const basket = Array.from({ length: n }, (_, k) => k + 1);

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ");
  const reverse = basket.splice(x - 1, y - x + 1).reverse();
  basket.splice(x - 1, 0, ...reverse);
}
console.log(...basket);

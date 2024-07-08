const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ");
const inputLine = [];
for (let i = 1; i < input.length; i++) {
  inputLine.push(
    input[i]
      .toString()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}
const basket = [];

for (let i = 1; i <= n; i++) {
  basket.push(i);
}

for (let i = 0; i < inputLine.length; i++) {
  const target = inputLine[i][0];
  const change = inputLine[i][1];
  const targetItem = basket[target - 1];
  const changeItem = basket[change - 1];
  basket.splice(target - 1, 1, changeItem);
  basket.splice(change - 1, 1, targetItem);
}
console.log(...basket);

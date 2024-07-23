const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [openedCardCnt, number] = input[0].split(" ").map(Number);
const openedCards = input[1].split(" ").map(Number);
let max = 0;

for (let i = 0; i < openedCardCnt - 2; i++) {
  for (let j = i + 1; j < openedCardCnt - 1; j++) {
    for (let k = j + 1; k < openedCardCnt; k++) {
      let sum = 0;
      sum += openedCards[i] + openedCards[j] + openedCards[k];
      if (sum > max && sum <= number) max = sum;
    }
  }
}
console.log(max);

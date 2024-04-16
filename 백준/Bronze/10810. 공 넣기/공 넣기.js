const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" "); // 총 바구니 개수, 넣는 횟수
let baskets = new Array(Number(N));
const inputLine = [];
input.map((i, idx) => {
  if (idx === 0) return;
  inputLine.push(i.trim().split(" ").map(Number));
});

// 공 넣기 시작
for (let i = 0; i < M; i++) {
  for (let k = inputLine[i][0] - 1; k <= inputLine[i][1] - 1; k++) {
    baskets[k] = inputLine[i][2];
  }
}
// 빈 바구니 체크
for (let i = 0; i < baskets.length; i++) {
  if (baskets[i] === undefined) {
    baskets[i] = 0;
  }
}
console.log(baskets.join(' '));

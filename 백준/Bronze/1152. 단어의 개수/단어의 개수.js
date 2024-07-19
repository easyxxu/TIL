const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

if (input[0] === "") {
  // 문자열이 공백으로 시작하거나 끝나는 경우
  console.log(0);
} else {
  console.log(input.length);
}

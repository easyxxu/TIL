const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const words = input.slice(1);

words.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  } else {
    return a.length - b.length;
  }
});

const set = new Set(words);
let answer = "";
set.forEach((word) => (answer += word + "\n"));
console.log(answer);

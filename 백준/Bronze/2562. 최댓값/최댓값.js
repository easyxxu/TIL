const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let numMax = 0;
for (let i = 0; i < input.length; i++) {
  numMax = Math.max(numMax, Number(input[i]));
}
let result = 0;
input.forEach((num, idx) => {
  if (num == numMax) result = idx + 1;
});
console.log(numMax + "\n" + result);

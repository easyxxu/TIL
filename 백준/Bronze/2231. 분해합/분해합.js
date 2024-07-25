const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function test(constructor) {
  const digits = [...constructor];
  let result = parseInt(constructor);
  digits.forEach((digit) => (result += parseInt(digit)));
  if (result === parseInt(input)) {
    return 1;
  } else {
    return 0;
  }
}

let min = parseInt(input);

for (let i = parseInt(input) - 1; i > 0; i--) {
  let result = test(i.toString());
  if (result === 1) {
    min = Math.min(min, i);
  }
}
console.log(min !== parseInt(input) ? min : 0);
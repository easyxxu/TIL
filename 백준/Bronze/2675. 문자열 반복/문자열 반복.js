const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 1; i <= input[0]; i++) {
  const [cnt, string] = input[i].split(" ");
  let result = "";
  for (let k = 0; k < string.length; k++) {
    result += string[k].repeat(cnt);
  }
  console.log(result);
}

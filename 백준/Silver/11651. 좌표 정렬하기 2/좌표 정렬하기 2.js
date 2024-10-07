const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const spot = input.slice(1).map((x) => x.split(" ").map(Number));

spot.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = "";
for (let i = 0; i < spot.length; i++) {
  answer += spot[i][0] + " " + spot[i][1] + "\n";
}
console.log(answer);

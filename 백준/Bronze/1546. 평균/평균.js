const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCnt = input[0];
const testArr = input[1].split(" ").map((x) => parseInt(x));
const maxTest = Math.max(...testArr);

let fakeTest = [];

testArr.map((test) => {
  test = (test / maxTest) * 100;
  fakeTest.push(test);
});

console.log(fakeTest.reduce((a, b) => a + b) / fakeTest.length);
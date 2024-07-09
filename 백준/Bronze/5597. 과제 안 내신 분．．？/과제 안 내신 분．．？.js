const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const submitted = [];
for (let i = 0; i < input.length; i++) {
  submitted.push(Number(input[i]));
}

const allStudents = Array.from({ length: 30 }, (_, i) => i + 1);

submitted.forEach((num) => {
  const idx = allStudents.indexOf(num);
  if (idx !== -1) {
    allStudents.splice(idx, 1);
  }
});

allStudents.sort((a, b) => a - b);
allStudents.forEach((student) => console.log(student));
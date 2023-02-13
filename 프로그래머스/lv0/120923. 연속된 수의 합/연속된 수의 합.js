function solution(num, total) {
  let answer = [];
  let ceilNum = Math.ceil(total / 2);
  while (true) {
    for (let i = num; i > 0; i--) {
      answer.push(ceilNum - i);
    }
    let sum = answer.reduce((acc, cur) => acc + cur, 0);
    if (sum === total) break;
    else if (sum < total) ceilNum++;
    else ceilNum--;
    answer = [];
  }
  return answer;
}
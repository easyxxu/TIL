function solution(prices) {
    const answer = Array(prices.length).fill(0);  // 결과를 저장할 배열, 초기값은 모두 0
    const stack = [];  // 인덱스를 저장할 스택

    for (let i = 0; i < prices.length; i++) {
        // 현재 가격이 스택에 저장된 인덱스의 가격보다 작을 경우
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop();  // 스택에서 인덱스를 꺼냄
            answer[top] = i - top;  // 가격이 떨어진 기간 계산
        }
        stack.push(i);  // 현재 인덱스를 스택에 넣음
    }

    // 스택에 남아있는 인덱스들은 끝까지 가격이 떨어지지 않은 경우
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}

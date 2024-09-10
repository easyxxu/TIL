function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = []
    
	for(let i=0;i<numbers.length;i++){
        // 스택이 비어있지 않고, 현재 값이 스택의 최상단 값보다 큰 동안
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const index = stack.pop();
            answer[index] = numbers[i]; // 뒷 큰수를 기록
        }
        stack.push(i); // 현재 인덱스를 스택에 추가
    }
    return answer
}
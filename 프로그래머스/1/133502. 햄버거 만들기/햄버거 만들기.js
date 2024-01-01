function solution(ingredient) {
    // 1 -> 2 -> 3 -> 1 순서로만 햄버거 포장
    // 아이템이 1이면 다음 아이템이 2인지 검사 -> 3인지 검사 -> 1인지 검사 => cnt++
    let stack = [];
    let cnt = 0;
    ingredient.forEach(i => {
        stack.push(i);
        if(stack.length >= 4){
            let hamburger = stack.splice(-4).join('');
            console.log(hamburger);
            if(hamburger === '1231'){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                cnt++;
            }
        }
    })
    return cnt;
}
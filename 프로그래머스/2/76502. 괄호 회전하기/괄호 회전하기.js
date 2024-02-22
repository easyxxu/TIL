function solution(s) {
    let result = 0;
    if (s.length % 2 == !0) return 0;
    for(let i=0;i<s.length;i++){
        const arr = [];
        const tmp = i === 0 ? s : s.slice(i) + s.slice(0,i); // 회전
        for(let j=0;j<tmp.length;j++){
            if(arr[arr.length - 1] === '(' && tmp[j] === ')') arr.pop();
            else if(arr[arr.length - 1] === '[' && tmp[j] === ']') arr.pop();
            else if(arr[arr.length - 1] === '{' && tmp[j] === '}') arr.pop();
            else arr.push(tmp[j]);
        }
        if(arr.length === 0) result++;
    }
    return result;
}
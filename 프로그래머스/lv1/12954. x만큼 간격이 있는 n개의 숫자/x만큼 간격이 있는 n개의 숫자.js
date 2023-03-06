function solution(x, n) {
    let answer = []
    const xVal = x
    for(let i=0;i<n;i++){
        answer.push(x)
        x += xVal
    }
    return answer
}
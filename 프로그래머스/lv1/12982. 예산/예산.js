function solution(d, budget) {
    let result = 0
    let cnt = 0
    d.sort((a,b) => a-b).forEach(x => {
        result += x
        result <= budget ? cnt++ : null
    })
    return cnt
}
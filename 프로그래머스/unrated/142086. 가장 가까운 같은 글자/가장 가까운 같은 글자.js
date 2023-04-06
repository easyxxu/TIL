function solution(s) {
    let sArr = s.split('')
    let result = [-1]
    for(let i = 1;i < sArr.length;i++){
        let idx = sArr.lastIndexOf(sArr[i], i-1)
        idx !== -1 ? result.push(i - idx) : result.push(-1)
    }
    return result
}
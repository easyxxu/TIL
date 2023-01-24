function solution(n) {
    let count = 0
    for(let i = 1 ; i <= n; i ++) {
        isMixNumber(i) ? count++ : null
    }
    return count
}

function isMixNumber(num) {
    let count = 0
    for(let i = 1 ; i <= (num/2) ; i ++) {
        num%i === 0 ? count++ : null
    }
    return count >= 2 ? true : false
}
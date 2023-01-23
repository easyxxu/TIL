function solution(num, k) {
    let arr = num.toString().split('')
    let result = arr.indexOf(k.toString())
    return result !== -1? result + 1 : -1
}
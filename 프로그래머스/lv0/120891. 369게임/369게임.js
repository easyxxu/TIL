function solution(order) {
    let arr = order.toString().split('')
    return arr.filter(x => x === '3' || x === '6' || x === '9').length
}
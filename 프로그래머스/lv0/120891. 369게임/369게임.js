function solution(order) {
    let cnt = order.toString().match(/[369]/g)
    return cnt !== null ? cnt.length : 0
}
function solution(order) {
    return order.toString().split('').filter(x => x==3 || x==6 || x==9).length
}
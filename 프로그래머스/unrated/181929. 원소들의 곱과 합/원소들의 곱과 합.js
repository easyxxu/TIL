function solution(num_list) {
    let multiply = num_list.reduce((a,b) => a*b)
    let plus = num_list.reduce((a,b) => a+b)
    return multiply < plus ** 2 ? 1 : 0
}
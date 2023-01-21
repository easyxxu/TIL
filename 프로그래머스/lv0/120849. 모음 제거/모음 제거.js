function solution(my_string) {
    let arr = ["a","e","i","o","u"]
    return my_string.split('').filter(x => !arr.includes(x)).join('')
}
function solution(my_string) {
    let string = my_string.split('')
    let array = string.filter(x => parseInt(x))
    let answer = 0
    for(let k=0;k<array.length;k++){
        answer += parseInt(array[k])
    }
    return answer
}
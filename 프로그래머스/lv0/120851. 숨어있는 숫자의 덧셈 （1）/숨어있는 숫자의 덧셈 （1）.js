function solution(my_string) {
    let array = my_string.split('').filter(x => parseInt(x))
    let answer = 0
    for(let k=0;k<array.length;k++){
        answer += parseInt(array[k])
    }
    return answer
}
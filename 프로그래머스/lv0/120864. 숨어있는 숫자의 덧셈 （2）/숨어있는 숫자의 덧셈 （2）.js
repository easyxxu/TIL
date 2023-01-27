function solution(my_string) {
    let answer=0
    for(let i=0;i<my_string.length;i++){
        let number = ''
        while(!Number.isNaN(Number(my_string[i]))){
            number+=my_string[i]
            i++
        }
        answer += +number
    }
    return answer
}
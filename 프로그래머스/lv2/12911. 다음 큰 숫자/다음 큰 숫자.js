function solution(n) {
    let answer = n + 1
    let nCnt = n.toString(2).replace(/0/g, '').length
    let answerCnt = answer.toString(2).replace(/0/g, '').length
    while(nCnt !== answerCnt){
        answer++
        answerCnt = answer.toString(2).replace(/0/g, '').length
    }
    return answer
}
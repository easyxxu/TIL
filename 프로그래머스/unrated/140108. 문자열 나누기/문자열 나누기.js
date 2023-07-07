function solution(s) {
    let answer = 0
    let xLen = 0
    let yLen = 0
    let char = ""
    for(let i of s){
        if(!char){
            char = i
        }
        if(char === i){
            xLen++
        }else yLen++
        
        if(xLen === yLen){
            answer++
            xLen = 0
            yLen = 0
            char = ""
        }
    }
    if(char){
        answer++
    }
    return answer    
}
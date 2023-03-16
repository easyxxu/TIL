function solution(s) {
    let arr = s.split(' ')
    let result = []
    for(let i=0; i<arr.length;i++){
        let string = arr[i].split('')
        //s에서 공백을 기준으로 잘라 각 단어의 대소문자 변경
        for(let k=0; k<string.length; k++){
            if(k % 2 == 0){
                string[k] = string[k].toUpperCase()
            }else {
                string[k] = string[k].toLowerCase() 
            }    
            result.push(string[k])
        }
        //단어를 구분하기 위한 공백 푸쉬
        result.push(' ')
    }
    //마지막에 공백이 들어가기 때문에 pop을 이용해 빼줌
    result.pop()
    return result.join('')
}
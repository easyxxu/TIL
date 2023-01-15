function solution(my_string, letter) {
    let array = my_string.slice('')
    let answer = []
    for(let i=0;i<array.length;i++){
       if(array[i]!==letter){
           answer.push(array[i])
       } 
    }
    return(answer.join(''))
}
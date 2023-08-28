function solution(names) {
    let result = []
    for(let i = 0; i <= names.length / 5; i++){
        result.push(names[5 * i])
    }
    if(names.length % 5 === 0){
        result.pop()   
    }
    return result
}
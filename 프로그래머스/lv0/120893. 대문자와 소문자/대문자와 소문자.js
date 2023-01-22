function solution(my_string) {
    // let string = my_string.split('')
    // let result = []
    // for(let i=0;i<string.length;i++){
    //     if(string[i] === string[i].toUpperCase()){
    //         result.push(string[i].toLowerCase())
    //     }else result.push(string[i].toUpperCase())
    // }
    // return result.join('')
    return my_string
        .split('')
        .map(string => string === string.toUpperCase() ? string.toLowerCase() : string.toUpperCase())
        .join('')
}
function solution(s) {
    let arr = s.split(' ')
    let result = []
    for(let i=0; i<arr.length;i++){
        let string = arr[i].split('')
        for(let k=0; k<string.length; k++){
            if(k % 2 == 0){
                string[k] = string[k].toUpperCase()
            }else {
                string[k] = string[k].toLowerCase() 
            }    
            result.push(string[k])
        }
        result.push(' ')
    }
    result.pop()
    return result.join('')
}
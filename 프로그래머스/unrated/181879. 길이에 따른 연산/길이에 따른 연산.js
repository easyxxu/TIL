function solution(num_list) {
    let result
    if(num_list.length >= 11){
        result = num_list.reduce((a,b) => a+b)
    }else{
        result = num_list.reduce((a,b) => a*b)
    }
    return result
}
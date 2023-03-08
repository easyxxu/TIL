function solution(a, b) {
    let result=0
    if(a < b){
        for(let i=a;i<=b;i++){
            result += i
        }
        return result
    }
    else if(a > b){
        for(let i=a;i>=b;i--){
            result += i
        }
        return result
    }
    else return a
}
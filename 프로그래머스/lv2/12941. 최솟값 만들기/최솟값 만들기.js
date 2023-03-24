function solution(A,B){
    let result = 0
    let aSort = A.sort((a,b) => a-b)
    let bSort = B.sort((a,b) => b-a)
    for(let i=0;i<A.length;i++){
        result += (aSort[i] * bSort[i])
    }
    return result
}
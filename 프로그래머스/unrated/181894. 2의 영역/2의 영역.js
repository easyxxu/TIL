function solution(arr) {
    let twoIdx = []
    let answer = []
    arr.forEach((i,idx) => {
        i === 2 ? twoIdx.push(idx) : null
    })
    for(let i = twoIdx[0]; i <= twoIdx[twoIdx.length-1]; i++){
        answer.push(arr[i])
    }
    return answer.length === 0 ? [-1] : answer
}
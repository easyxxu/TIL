function solution(s) {
    let arr = s.split(' ').map(x => parseInt(x))
    let sortArr = arr.sort((a,b) => a-b)
    let result = []
    result.push(sortArr[0].toString())
    result.push(sortArr[sortArr.length-1].toString())
    return result.join(' ')
}
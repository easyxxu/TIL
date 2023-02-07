function solution(A, B) {
    let aArr = A.split('')
    let bArr = []
    for(let i of aArr){
        let last = aArr.pop()
        aArr.splice(0,0,last)
        bArr.push(aArr.join(''))
    }
    
    if(A === B)
        return 0
    else if(bArr.indexOf(B) !== -1)
        return bArr.indexOf(B) + 1
    else return -1
}
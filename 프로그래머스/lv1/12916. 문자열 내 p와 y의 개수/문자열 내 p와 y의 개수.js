function solution(s){
    let p = 0
    let y = 0
    let sArr = s.split('')
    for(let i = 0;i < sArr.length;i++){
        sArr[i] === 'p' || sArr[i] === 'P' ? p += 1 : null
        sArr[i] === 'y' || sArr[i] === 'Y' ? y += 1: null
    }
    if(p === y || (p === 0 && y ===0)) return true
    else return false
}
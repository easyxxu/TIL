function solution(phone_number) {
    let pArr = phone_number.split('')
    for(let i=0; i<pArr.length - 4;i++){
        pArr[i]='*'
    }
    return pArr.join('')
}
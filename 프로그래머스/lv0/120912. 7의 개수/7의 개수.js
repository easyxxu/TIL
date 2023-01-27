function solution(array) {
    let cnt = 0
    let arr = []
    array.map(x => x.toString().split('')).forEach(a => {
        a.forEach(b => {
            if(b === '7')   arr.push(b)
        })
    })
    return arr.length
}
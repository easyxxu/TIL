function solution(brown, yellow) {
    const carpetTotal = brown + yellow
    const arr = []
    for(let row = 2; row <= carpetTotal / 2; row++){
        const col = carpetTotal / row
        if(carpetTotal % row === 0 && row >= col && row * 2 < brown && ((row - 2)*(col - 2) === yellow)){
            arr.push(row,col)
        }
    }
    return arr
}
function solution(box, n) {
    //return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
    //return box.map(x => Math.floor(x / n)).reduce((a, b) => a * b, 1)
    return box.reduce((a, b) => a * Math.floor(b / n), 1)
}
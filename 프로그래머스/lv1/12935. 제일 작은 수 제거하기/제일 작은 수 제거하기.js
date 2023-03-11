function solution(arr) {
    let min = Math.min(...arr)
    return arr[0] === min ? [-1] : arr.filter(x => x !== min)
    // return arr.length > 1 ? arr.filter(x => x !== Math.min(...arr)) : [-1]
}
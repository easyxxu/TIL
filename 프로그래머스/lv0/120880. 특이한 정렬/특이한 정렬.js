function solution(numlist, n) {
    let arr = numlist.map(x=>[Math.abs(n-x), x]);
    return arr.sort((a,b) => a[0] - b[0] || b[1] - a[1]).map(x => x[1])
    
}
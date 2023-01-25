function solution(array, n) {
    let ans = array.map(x=>Math.abs(n-x))
    const min = Math.min(...ans)
    let result = []
    for(let i=0;i<ans.length;i++){
        if(ans[i] === min){
            result.push(array[i])
        }
    }return Math.min(...result)
}
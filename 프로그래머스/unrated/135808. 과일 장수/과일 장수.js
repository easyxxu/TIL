function solution(k, m, score) {
    let scoreSort = score.sort((a,b) => b-a)
    let boxs = []
    let price = 0
    
    //상자에 나눠담기
    for(let i=0;i<scoreSort.length;i += m){
        if(scoreSort.slice(i, i+m).length === m){
            boxs.push(scoreSort.slice(i, i + m))    
        }
    }
    
    //각 상자의 가격 구하기
    for(let i=0;i<boxs.length;i++){
        price += Math.min(...boxs[i]) * m
    }
    return price
}
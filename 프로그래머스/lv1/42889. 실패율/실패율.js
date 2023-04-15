function solution(N, stages) {
    //실패율 구하기
    let fail = []
    for(let i=1;i<=N;i++){
        let yet = 0
        let success = 0
        for(let k = 0;k < stages.length;k++){
            if(stages[k] == i){
                yet++
            }else if(stages[k] >= i+1){
                success++
            }
        }
        fail.push({stage:i, percent: yet/success})
    }
    //내림차순
    fail.sort((a,b)=>{
        if(a.percent === b.percent){
            return a.stage - b.stage
        }
        else{
            return b.percent - a.percent
        }
    })
    return fail.map(x => x.stage)
}
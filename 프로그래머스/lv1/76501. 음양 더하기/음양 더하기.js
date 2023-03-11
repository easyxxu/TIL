function solution(absolutes, signs) {
    let arr = []
    for(let i=0;i<signs.length;i++){
        if(signs[i] == true){
            arr.push(absolutes[i])
        }else if(signs[i] == false){
            arr.push(-absolutes[i])
        }
    }
    return arr.reduce((a,b)=>a+b)
}
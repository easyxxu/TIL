function solution(n) {
    let num = []
    for(let i=0;i<=n;i++){
        if(n % i === 0){
            num.push(i)
        }
    }
    return num.reduce((a,b)=>a+b, 0)
}
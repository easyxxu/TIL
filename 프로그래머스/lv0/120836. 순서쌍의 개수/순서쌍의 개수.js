function solution(n) {
    let measure = []
    let i = 1
    while(i<=n){
        if(n % i == 0){
            measure.push(i)
        }
        i+=1
    }return measure.length
}
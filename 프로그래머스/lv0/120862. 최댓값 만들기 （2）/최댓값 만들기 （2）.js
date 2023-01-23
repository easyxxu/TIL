function solution(numbers) {
    let arr = []
    for(let i=0;i<numbers.length;i++){
        for(let k=0;k<numbers.length;k++){
            if(i !== k)
                arr.push(numbers[i] * numbers[k])
        }
    }return Math.max(...arr)
}
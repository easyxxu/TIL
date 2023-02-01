function solution(bin1, bin2) {
    let bin1Arr = bin1.split('')
    let bin2Arr = bin2.split('')
    let k = 0
    let m = 0
    for(let i=bin1Arr.length-1;i >= 0;i--){
        bin1Arr[i] = Number(bin1Arr[i]) * 2 ** k    
        k++
    }
    for(let i=bin2Arr.length-1;i >= 0;i--){
        bin2Arr[i] = Number(bin2Arr[i]) * 2 ** m
        m++
    }
    let b1 = bin1Arr.reduce((a,b) => a+b)
    let b2 = bin2Arr.reduce((a,b) => a+b)
    return (b1 + b2).toString(2)
}
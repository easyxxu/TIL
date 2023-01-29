function solution(numbers) {
    const strNum = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i=0;i<strNum.length;i++){
        numbers = numbers.split(strNum[i]).join(i)
        console.log(numbers)
    }
    return Number(numbers)
}
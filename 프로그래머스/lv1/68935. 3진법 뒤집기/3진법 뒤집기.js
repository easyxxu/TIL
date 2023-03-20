function solution(n) {
    let reversed_N = n.toString(3).split('').reverse().join('')
    return parseInt(reversed_N, 3)
    // 런타임 에러나는 내 코드.. toString을 기억하지 못한 사람의 최후..
    // let arr = []
    // let result = []
    // //3진법-뒤집힌 상태
    // while(n !== 1){
    //     arr.push(n % 3)
    //     n = Math.floor(n / 3)
    // }
    // arr.push(n)
    // console.log(arr)
    // let i = arr.length - 1
    // //10진법으로 변경
    // arr.forEach(x => {
    //     result.push(x * (3 ** i))
    //     i--
    // })
    // return result.reduce((a,b) => a + b)
}
function solution(food) {
    let playerA = []
    let dish 
    for(let i = 1;i < food.length; i++){
        dish = parseInt(food[i] / 2)
        for(let k = 0;k < dish; k++){
            playerA.push(i)
        }
    }
    //reverse()는 원본 배열을 변경하기 때문에 전개연산자를 이용하여 원본 배열을 유지함
    let playerB = [...playerA].reverse()
    return [...playerA, 0, ...playerB].join('')
}
function solution(food) {
    let player = []
    let dish 
    let result
    for(let i = 1;i < food.length; i++){
        dish = parseInt(food[i] / 2)
        for(let k = 0;k < dish; k++){
            player.push(i)
        }
    }
    result = player.join('') + 0 + player.reverse().join('')
    return result
}
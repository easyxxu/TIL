function solution(board, moves) {
    let basket = []
    let result = 0
    for(let i of moves){
        const doll = pick(board, i-1)
        if(doll){
            if(basket[basket.length-1] === doll){
                    basket.pop();
                    result += 2;
                }else{
                    basket.push(doll);
                }
            }
        }
    return result
}
function pick(board,i){
    for(let n=0;n<board.length;n++){
        if(board[n][i] > 0){
            const doll = board[n][i]
            board[n][i] = 0;
            return doll;
        }
    }
}
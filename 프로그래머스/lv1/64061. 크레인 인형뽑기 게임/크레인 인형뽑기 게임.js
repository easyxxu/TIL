function solution(board, moves) {
    let basket = []
    for(let i of moves){
        board.forEach((item, idx) => {
            if(item[i-1] > 0 && board[idx+1] !== undefined ){
                basket.push(board[idx][i-1])
                board[idx][i-1] = 0 // 뽑은 인형 초기화
            }
        })
    }
    console.log(basket)
}
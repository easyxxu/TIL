function solution(board) {
    const boom = []
    const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
    const dy = [0, 0, -1, 1, -1, 1, -1, 1]
    //폭탄의 인덱스
    for(let i = 0;i<board.length;i++){
        for(let k = 0;k<board.length;k++){
            if(board[i][k] === 1){
                boom.push([i,k])
            }
        }
    }
    boom.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
        board[nx][ny] = 1
      }
    }
  })
    let count = 0
    for (let x = 0; x < board.length; x++) {
         for (let y = 0; y < board.length; y++) {
             if (board[x][y] === 0) {
                count++
          }
        }
      }

  return count
}
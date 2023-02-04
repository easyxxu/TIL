function solution(keyinput, board) {
    let coordinate = [0,0];
    const x = Math.floor(board[0] / 2); //x축 범위
    const y = Math.floor(board[1] / 2); //y축 범위
    
    for(let i of keyinput){
        switch(i){
            case 'left': 
                if(-coordinate[0] < x) coordinate[0]--; break;
            case 'right':
                if(coordinate[0] < x) coordinate[0]++; break;
            case 'up':
                if(coordinate[1] < y) coordinate[1]++; break;
            case 'down':
                if(-coordinate[1] < y) coordinate[1]--; break;
        }
    }
    return coordinate;
    
}
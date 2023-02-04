function solution(keyinput, board) {
    let coordinate = [0,0];
    const x = Math.floor(board[0] / 2); //x축 범위
    const y = Math.floor(board[1] / 2); //y축 범위
    for(let i = 0; i<keyinput.length; i++){
        if(keyinput[i] === "up"){
            coordinate[1] += 1;
            coordinate[1] > y ? coordinate[1] -= 1 : null;
        }else if(keyinput[i] === "down"){
            coordinate[1] -= 1;
            coordinate[1] < -y ? coordinate[1] += 1 : null;
        }else if(keyinput[i] === "left"){
            coordinate[0] -= 1;
            coordinate[0] < -x ? coordinate[0] += 1 : null;
        }else if(keyinput[i] === "right"){
            coordinate[0] += 1;
            coordinate[0] > x ? coordinate[0] -= 1 : null;
        }
    }
    return coordinate;
    
}
function solution(quiz) {
    let xo = [];
    let result;
    for(let i of quiz){
        const arr = i.split(' ');
        arr.forEach(item => {
            if(item === '-'){
                result = parseInt(arr[0],10) - parseInt(arr[2],10);
                result === parseInt(arr[4]) ? xo.push('O') : xo.push('X');
            }
            if(item === '+'){
                result = parseInt(arr[0], 10) + parseInt(arr[2], 10);
                result === parseInt(arr[4]) ? xo.push('O') : xo.push('X');
            }
        })
    }
    return xo
}
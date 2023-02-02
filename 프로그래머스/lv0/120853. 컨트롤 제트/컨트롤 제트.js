function solution(s) {
    let sArr = s.split(' ');
    let arr = [];
    for(let i=0;i<sArr.length;i++){
        if(sArr[i+1] === 'Z'){
            sArr[i+1] = 0;
            sArr[i] = 0;
        }
        arr.push(Number(sArr[i]));
    }return arr.reduce((a,b) => a+b);
}
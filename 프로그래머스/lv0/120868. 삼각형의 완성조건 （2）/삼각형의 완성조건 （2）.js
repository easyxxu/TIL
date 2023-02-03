function solution(sides) {
    let arr = [];
    let big = Math.max(...sides);
    let small = Math.min(...sides);
    //x가 제일 긴 변인 경우
    for(let x = big + 1; x < big + small; x++){
        arr.push(x);
    }
    //big이 제일 긴 변인 경우
    for(let x = big-small+1; x <= big; x++){
        arr.push(x);
    }
    console.log(arr)
    return arr.length;
}
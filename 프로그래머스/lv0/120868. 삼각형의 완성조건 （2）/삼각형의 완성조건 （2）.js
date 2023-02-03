function solution(sides) {
    // let arr = [];
    // let big = Math.max(...sides);
    // let small = Math.min(...sides);
    // //big-small < x < big+small
    // for(let x = big - small + 1; x < big + small; x++){
    //     arr.push(x);
    // }
    // return arr.length;
    return Math.min(...sides) * 2 - 1
}
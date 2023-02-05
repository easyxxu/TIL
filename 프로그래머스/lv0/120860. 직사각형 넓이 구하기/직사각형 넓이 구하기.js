function solution(dots) {
    let x = [];
    let y = [];
    let width;
    let height;
    for(let i=0;i<dots.length;i++){
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    width = Math.max(...x)-Math.min(...x);
    height = Math.max(...y)-Math.min(...y);
    return width * height;
}
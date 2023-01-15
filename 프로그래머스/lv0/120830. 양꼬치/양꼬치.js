function solution(n, k) {
    k-=~~(n/10);
    console.log(k)
    if (k < 0) k = 0;
    return n*12000+k*2000;
}

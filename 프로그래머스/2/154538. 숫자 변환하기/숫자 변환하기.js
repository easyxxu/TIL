function solution(x, y, n) {
    const dp = new Array(y+1).fill(Infinity)
    dp[x] = 0
    
    // x부터 y까지 순차적으로 연산
    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue; // 아직 도달할 수 없는 값은 건너뜀
        
        // i + n 연산
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        
        // i * 2 연산
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        
        // i * 3 연산
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }

    // y에 도달할 수 없는 경우 -1을 반환
    return dp[y] === Infinity ? -1 : dp[y];
}

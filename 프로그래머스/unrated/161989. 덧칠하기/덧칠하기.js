function solution(n, m, section) {
    let cnt = 0
    let idx = 0
    for(let i of section){
        while(i > idx){
            cnt++
            idx = i + m - 1 // 칠해진 마지막 인덱스
        }
    }
    return cnt
}
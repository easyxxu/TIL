function solution(n, lost, reserve) {
    let lostLength = lost.length;
    let answer =  n - lostLength;
    let tmp = [];
    
    // 체육복도 잃어버리고 여분의 체육복도 동시에 있는 경우
    for (let i = 0; i < lostLength ; i ++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter((ele) => ele !== lost[i])
            answer += 1;
        } else {
            tmp.push(lost[i]);
        }
    }
    // 순서에 상관없이 들어올 입력을 대비해 정렬해줌
    lost = tmp.sort();
    
    for (let i = 0 ; i < lostLength ; i ++) {
        if (reserve.includes(lost[i] - 1 )) {
            answer += 1 ;
            reserve = reserve.filter ((ele) => ele !== lost[i] - 1 )
        }
        else if (reserve.includes(lost[i] + 1)) {
            answer += 1;
            reserve = reserve.filter((ele) => ele !== lost[i] + 1)
        }
    }
    return answer;
}
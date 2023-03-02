function solution(n)
{
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    //reduce에서 초기값을 0으로 설정하지 않으면 마지막 테케 통과하지 못함
}
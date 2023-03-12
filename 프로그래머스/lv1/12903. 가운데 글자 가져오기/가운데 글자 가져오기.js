function solution(s) {
    if(s.length % 2 == 0){ //짝수
        let cnt = s.length / 2
        return s.slice(cnt-1, cnt+1)
    }else{
        let cnt = Math.floor(s.length / 2)
        console.log(cnt)
        return s.slice(cnt, cnt+1)
    }
}
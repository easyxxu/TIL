function solution(lottos, win_nums) {
    // 민우가 맞춘 로또 번호 개수
    let lowest = win_nums.filter(x => {
        for(let i=0;i<lottos.length;i++){
            if(lottos[i] === x) return x
        }
    }).length
    // 민우의 가려진 숫자 개수
    const zeroCnt = lottos.filter(x => x == 0).length
    let highest = lowest + zeroCnt
    
    //몇 등인지
    function rank(cnt){
        switch(cnt){
            case 6:
                return 1
                break
            case 5:
                return 2
                break
            case 4:
                return 3
                break
            case 3:
                return 4
                break
            case 2:
                return 5
                break
            case 1:
                return 6
                break
            default:
                return 6
        }
    }
    return [rank(highest), rank(lowest)]
}
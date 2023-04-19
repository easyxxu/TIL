function solution(cards1, cards2, goal) {
    for(const s of goal) {
        if(cards1[0] == s) {
            cards1.shift(); // 첫번째 요소 제거
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }
    return "Yes";
}
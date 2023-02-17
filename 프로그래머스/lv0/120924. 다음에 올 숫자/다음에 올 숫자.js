function solution(common) {
    //등차수열
    if(common[0]-common[1] == common[1] - common[2]){
        return common[common.length-1] + common[1]-common[0]
    }
    //등비수열
    else 
        return common[common.length-1] * common[1] / common[0]
}
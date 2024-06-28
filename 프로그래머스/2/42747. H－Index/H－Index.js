function solution(citations) {
    let hIndex = 0
    const sortedCitations = citations.sort((a,b) => b-a)

    for(let i=0;i<sortedCitations.length;i++){
        if(sortedCitations[i] >= i+1){
            hIndex = i+1
        }
    }
    return hIndex
}
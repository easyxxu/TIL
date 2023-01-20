function solution(s1, s2) {
    let array = []
    for(let i=0;i<s1.length;i++){
        for(let k=0;k<s2.length;k++){
            if(s1[i]===s2[k]){
                array.push(s1[i])
            }
        }
    }return array.length
}
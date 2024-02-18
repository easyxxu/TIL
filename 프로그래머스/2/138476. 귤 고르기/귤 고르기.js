function solution(k, tangerine) {
    let result = 0
    const obj = {}
    for(let i of tangerine){
        obj[i] === undefined ? obj[i] = 1 : obj[i]++
    }
    const count = Object.values(obj).sort((a,b) => b-a)
    
	for(let i = 0;i < count.length; i++){
		if(count[i] >= k){
			result++
			break;
        }else if(count[i] < k){
			k -= count[i]
            result++
        }
		if(k === 0) break;
	}
    return result
}
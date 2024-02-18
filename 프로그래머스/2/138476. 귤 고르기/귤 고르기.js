function solution(k, tangerine){
	let result = 0;
	let countOfSize = {};
	for(let i of tangerine) {
		countOfSize[i] === undefined ? countOfSize[i] = 1 : countOfSize[i]++
	}
	countOfSize = Object.values(countOfSize).sort((a,b) => b - a);
	
	for(let count of countOfSize){
		result++;
		if(count < k) k -= count
		else break;
	}
	return result;
}
function solution(s) {
    let result = []
    // 중첩된 배열 형태로 변환
    let nestedArrays = Array.from(s.matchAll(/\{([^{}]*)\}/g), match => 
        match[1].split(',').map(Number)
    );

    // 각 배열을 집합으로 변환
    let sets = nestedArrays.map(arr => new Set(arr));

    // 변환된 집합들을 하나의 배열에 담음
    let arr = sets.map(set => Array.from(set)).sort((a,b) => a.length - b.length);
	
    for(let i of arr){
        for(let k of i){
            if(!result.includes(k)) result.push(k)
        }
    }
    
    return result
}
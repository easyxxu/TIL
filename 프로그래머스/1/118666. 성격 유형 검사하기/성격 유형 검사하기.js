function solution(survey, choices) {
	const scores = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
	let result = ''
    survey.forEach((test, idx) => {
        const type = test.split('')
        const choice = choices[idx]
        if(choice === 4) return
        
        const addScore = Math.abs(choices[idx] - 4)
        if(choice >= 1 && choice <= 3){
            scores[type[0]] += addScore
        }else{
            scores[type[1]] += addScore
        }
    })
    
    const types = Object.keys(scores)
    
    for(let i=0;i<types.length;i+=2){
        if(scores[types[i]] >= scores[types[i+1]]) result += types[i]
        else result += types[i+1]
    }
    return result
}
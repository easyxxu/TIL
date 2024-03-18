function solution(today, terms, privacies) {
    const result = []
	const [year, month, day] = today.split('.').map(Number);
    const todayDate = year * 336  + month * 28 + day

    const termsObj = {}
    terms.map(term => {
        const [type, validPeriod] = term.split(' ');
        termsObj[type] = Number(validPeriod);
    })
    
    privacies.forEach((privacy, idx) => {
		const [agreeDate, agreeType] = privacy.split(' ')
        const [agreeY, agreeM, agreeD] = agreeDate.split('.').map(Number);
        const date = agreeY * 336 + agreeM * 28 + agreeD+ termsObj[agreeType] * 28
        
		if(date <= todayDate) result.push(idx+1)
    })
    return result
}
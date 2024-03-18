function solution(today, terms, privacies) {
    const result = []
    today = today.split('.')
    const todayY = parseInt(today[0])
    const todayM = parseInt(today[1])
    const todayD = parseInt(today[2])
    const todayDate = todayY * 336 + todayM * 28 + todayD
    
    privacies.forEach((privacy, idx) => {
		privacy = privacy.split(' ')
        let agree = privacy[0]
        const kind = privacy[1]

        agree = agree.split('.')
        const agreeY = parseInt(agree[0])
        const agreeM = parseInt(agree[1])
        const agreeD = parseInt(agree[2])
        
        let validPeriod 
        terms.forEach((term,i) => {
            const termArr = term.split(' ')
            const termKind = termArr[0]
            const period = termArr[1]
            if(termKind === kind) validPeriod = period
        })
		
        const agreeDate = agreeY * 336 + agreeM * 28 + agreeD+ validPeriod * 28
        
		if(agreeDate <= todayDate) result.push(idx+1)
    })
    return result
}
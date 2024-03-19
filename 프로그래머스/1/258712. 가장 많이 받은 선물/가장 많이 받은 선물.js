function solution(friends, gifts) {
    let max = 0;
    const result = new Object();
    friends.forEach(friend => result[friend] = 0)
    
    const total = new Object();
    friends.forEach(friend => total[friend] = Object.assign({}, result))

	gifts.forEach((gift,i)=>{
		const [giver, receiver] = gift.split(' ')
		total[giver][receiver]++
		total[giver][giver]++
		total[receiver][receiver]--
	})

    friends.forEach(giver => {
	    let count = 0;
	    friends.forEach(receiver => {
		    const giveCnt = total[giver][receiver]
		    const receiveCnt = total[receiver][giver]
		    if(giver !== receiver){
			    if(giveCnt > receiveCnt || (giveCnt === receiveCnt && total[giver][giver] > total[receiver][receiver])) count++
        	}
    	})
        max =  Math.max(max,count);
    })
	return max
}
                    
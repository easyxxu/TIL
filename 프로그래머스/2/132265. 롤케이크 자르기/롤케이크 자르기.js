function solution(topping) {
    let result = 0
    let leftUnique = []
    let rightUnique = []
    let set1 = new Set()
    let set2 = new Set()
    
    for(let i=0;i<topping.length;i++){    
    	set1.add(topping[i])
        set2.add(topping[topping.length - 1 - i])
        leftUnique.push(set1.size)
        rightUnique.push(set2.size)
    }
    rightUnique.reverse()
    for(let i=0;i<topping.length;i++){
        if(leftUnique[i] === rightUnique[i+1]) result++
    }
    return result
}

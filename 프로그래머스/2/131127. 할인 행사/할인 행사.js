function solution(want, number, discount) {
    let result = 0
    const lastDay = discount.length - 9
    
    for(let i=0;i<lastDay;i++){
        const cart = Array(number.length).fill(0)
        if(!want.includes(discount[i])) continue
        for(let k=i;k<i+10;k++){
            cart[want.indexOf(discount[k])]++
        }
        if(JSON.stringify(number) === JSON.stringify(cart)){
            result++
        }
    }
    return result
}
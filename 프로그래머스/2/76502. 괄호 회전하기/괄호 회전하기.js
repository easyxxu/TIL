function solution(s) {
    let result = 0
    const stack = s.split('')
        
    for(let i=0;i<stack.length;i++){
        if(i === 0 && (stack[i] === ']' || stack[i] === ')' || stack[i] === '}')){
            let item = stack.splice(0,1)
            stack.push(item[0])
            console.log(stack)
            return
        }
    }
    
}
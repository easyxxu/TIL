function solution(a, b) {
    let count = 1
    for(let i=1;i<=b;i++){
        a%i===0 && b%i===0 ? count = i : null
    }
    b/=count
    while(b%2===0) b/=2
    while(b%5===0) b/=5
    return b === 1 ? 1 : 2
}
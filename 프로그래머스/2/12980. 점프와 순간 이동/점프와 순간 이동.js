function solution(n)
{
    let energy = 0;
    let num = n;
    let now = 0;
    
    while(num !== 0){
        if(num % 2 === 1){
            now -= 1;
            energy += 1;
        }
        now = Math.floor(num / 2);
        num = now;
    }
    
    return energy;
}
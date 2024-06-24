function gcd(a, b){ // 최대공약수
    if(b === 0){
        return b
    }else if(a % b === 0){
        return b
    }else{
        return gcd(b, a % b)
    }
}

function lcm(a, b){ // 최소공배수
    return (a * b) / gcd(a, b)
}

function solution(arr) {
    let answer = 1;
    for(let i = 0; i < arr.length; i++){
        answer = lcm(answer, arr[i])
    }
    return answer
}
function solution(n) { 
    switch(n % Math.sqrt(n)){
        case 0:
          return Math.pow(Math.sqrt(n) + 1, 2);
        default:
          return -1
    }
}
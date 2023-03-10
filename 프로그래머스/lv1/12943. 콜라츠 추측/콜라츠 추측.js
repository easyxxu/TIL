function solution(num) {
    let result = 0;
    while(num != 1 && result != 500){
        num % 2 == 0 ? num /= 2 : num = num * 3 + 1;
        result++;
    }
    return num == 1 ? result : -1;
}
function solution(my_string) {
    return result = [...my_string]
        .filter(x => parseInt(x) >= 0)
        .sort((a, b) => a - b)
        .map(x => parseInt(x))
}
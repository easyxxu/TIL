function solution(str1, str2) {
    const regex = new RegExp(str2)
    return str2.search(str1) === -1 ? 0 : 1
}
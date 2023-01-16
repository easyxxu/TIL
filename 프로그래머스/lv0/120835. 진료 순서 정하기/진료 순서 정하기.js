function solution(emergency) {
    let first = emergency.slice().sort((a,b)=>b-a) //내림차순 정렬
    return emergency.map(v => first.indexOf(v)+1)
}
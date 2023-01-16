function solution(emergency) {
    let arr = [...emergency].sort((a,b)=>b-a) //내림차순 정렬
    return emergency.map(v => arr.indexOf(v)+1)
}
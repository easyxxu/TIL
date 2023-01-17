function solution(array, height) {
    return array.sort((a,b)=>a-b).filter(x=>height<x).length
}
function solution(sides) {
    let array = sides.sort((a,b)=>(a-b))
    return array[0]+array[1]>array[2] ? 1 : 2
}
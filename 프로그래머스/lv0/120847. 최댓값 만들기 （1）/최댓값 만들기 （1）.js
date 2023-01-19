function solution(numbers) {
    let array = numbers.sort((x,y)=>(x-y))
    return array[array.length-1] * array[array.length-2]
}
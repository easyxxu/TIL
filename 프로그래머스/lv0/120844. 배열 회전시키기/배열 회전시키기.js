function solution(numbers, direction) {
    if(direction === "left"){
        numbers.push(numbers[0])
        numbers.shift()
        return numbers
    }else {
        numbers.splice(0,0,numbers[numbers.length-1])
        numbers.pop()
        return numbers
    }
}
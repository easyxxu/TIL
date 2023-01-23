function solution(my_string, num1, num2) {
    let arr = my_string.split('')
    const num = arr[num1]
    
    let arr2 = arr.splice(num1,1,arr[num2])
    let arr3 = arr.splice(num2,1,num)
    
    return arr.join('')
    
}
function solution(my_string) {
    // let arr = my_string.split('')
    // for(let i = 0;i < arr.length;i++){
    //     for(let k = i+1; k < arr.length;k++){
    //         if(arr[i] === arr[k])
    //             arr.splice(k,1)
    //     }
    // }return arr.join('')
    return [...new Set([...my_string])].join('')
}
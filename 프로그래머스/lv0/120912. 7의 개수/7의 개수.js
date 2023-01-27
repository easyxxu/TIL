function solution(array) {
    // let arr = []
    // array.map(x => x.toString().split('')).forEach(a => {
    //     a.forEach(b => {
    //         if(b === '7')   arr.push(b)
    //     })
    // })
    // return arr.length
    return array.join('').split('').filter(x=>x==='7').length
}
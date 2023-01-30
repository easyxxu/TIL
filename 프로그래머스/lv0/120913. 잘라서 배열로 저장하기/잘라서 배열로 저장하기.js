function solution(my_str, n) {
    let array = [];
    let str = my_str.split('');
    while(str.length > 0){
        array.push(str.splice(0,n).join(''))
    }
    return array
}